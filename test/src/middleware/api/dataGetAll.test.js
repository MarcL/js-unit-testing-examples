import {createRequest, createResponse} from 'node-mocks-http';
import dataGetAll from '../../../../src/middleware/api/dataGetAll';
import * as dataService from '../../../../src/services/data';

describe('dataGetAll()', () => {
    let fakeRequest;
    let fakeResponse;
    let stubDataServiceGetAll;

    const fakeData = [];

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubDataServiceGetAll = sinon.stub(dataService, 'getAll');
        stubDataServiceGetAll.resolves(fakeData);
    });

    afterEach(() => {
        stubDataServiceGetAll.restore();
    });

    it('should respond with expected json when data request succeeds', (done) => {
        const spyResponseJson = sinon.spy(fakeResponse, 'json');

        const expectedData = {
            data: [],
            success: true
        };

        dataGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(spyResponseJson)
                    .to.have.been.calledWithExactly(expectedData);
                expect(spyResponseJson.getCall(0).args)
                    .to.deep.equal([expectedData]);
            })
           .should.notify(done);
    });

    it('should respond with expected failure json when data request fails', (done) => {
        const spyResponseJson = sinon.spy(fakeResponse, 'json');

        const givenFailureData = 'error connecting to database';
        stubDataServiceGetAll.rejects(givenFailureData);

        const expectedData = {
            success: false,
            message: givenFailureData
        };

        dataGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(spyResponseJson)
                    .to.have.been.calledWithExactly(expectedData);
                expect(spyResponseJson.getCall(0).args[0])
                    .to.deep.equal(expectedData);
            })
            .should.notify(done);
    });

    it('should call data service getAll()', (done) => {
        dataGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(stubDataServiceGetAll.callCount).to.equal(1);
            })
            .should.notify(done);
    });
});

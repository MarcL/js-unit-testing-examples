import {createRequest, createResponse} from 'node-mocks-http';
import dataGetAll from '../../../../src/middleware/api/dataGetAll';
import * as dataService from '../../../../src/services/data';

describe('dataGetAll()', () => {
    let fakeRequest;
    let fakeResponse;
    let stubDataServiceGetAll;
    let spyResponseJson;

    const fakeData = [];

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubDataServiceGetAll = sinon.stub(dataService, 'getAll');
        stubDataServiceGetAll.resolves(fakeData);
        spyResponseJson = sinon.spy(fakeResponse, 'json');
    });

    afterEach(() => {
        stubDataServiceGetAll.restore();
    });

    it('should call data service getAll()', (done) => {
        dataGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(stubDataServiceGetAll.callCount).to.equal(1);
            })
            .should.notify(done);
    });

    it('should render expected json when data request succeeds', (done) => {
        const expectedData = {
            data: [],
            success: true
        };

        dataGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(spyResponseJson)
                    .to.have.been.calledWithExactly(expectedData);
            })
           .should.notify(done);
    });

    it('should render expected failure json when data request fails', (done) => {
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
            })
            .should.notify(done);
    });
});

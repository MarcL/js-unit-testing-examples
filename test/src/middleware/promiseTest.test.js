import {createRequest, createResponse} from 'node-mocks-http';
import promiseTest from '../../../src/middleware/promiseTest';

describe('promiseTest middleware', () => {
    let fakeRequest;
    let fakeResponse;
    let stubResponseJson;

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubResponseJson = sinon.stub(fakeResponse, 'json');
    });

    afterEach(() => {
        stubResponseJson.restore();
    });

    it('should render expected json when Promise resolves', () => {
        const expectedJson = {
            message: 'response inside Promise',
            error: false
        };

        return promiseTest(fakeRequest, fakeResponse)
            .then(() => {
                expect(stubResponseJson)
                    .to.have.been.calledWithExactly(expectedJson);
            });
    });
});

import * as dataService from '../../services/data';


const dataGetAll = (request, response) => {
    const renderJsonResponse = (dataObject, success = true) => {
        const jsonResponse = Object.assign(
            dataObject,
            {success}
        );
        response.json(jsonResponse);
    };

    return dataService.getAll()
        .then((data) => {
            renderJsonResponse({
                data
            });
        })
        .catch((error) => {
            renderJsonResponse({
                message: error.name
            }, false);
        });
};

export default dataGetAll;

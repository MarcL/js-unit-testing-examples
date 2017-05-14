import * as dataService from '../../services/data';

const dataGetAll = (request, response) => {
    return dataService.getAll()
        .then((data) => {
            response.json({
                data,
                success: true
            });
        })
        .catch((error) => {
            response.json({
                message: error.name,
                success: false
            });
        });
};

export default dataGetAll;

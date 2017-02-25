function promiseTest(request, response) {
    return Promise.resolve()
        .then(() => {
            response.json({
                message: 'response inside Promise',
                error: false
            });
        });
}

export default promiseTest;

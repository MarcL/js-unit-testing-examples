const eventsDatabase = [];

const getAll = () => {
    return Promise.resolve(eventsDatabase);
};

export {
    getAll
};

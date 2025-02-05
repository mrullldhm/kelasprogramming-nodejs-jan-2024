const get = (req, res) => {
    const resObject = {
        message: 'Server to-do-app REST api is runnning',
        data: true // optional, depends on situation
    };
    res.status(200).json(resObject);
}

const post = (req, res) => {
    const body = req.body;
    const resObject = {
        message: 'Server to-do-app REST api is runnning',
        data: body // data can be anything, depends on situation
    };
    res.status(200).json(resObject);
}

const healthController = {
    get,
    post
};

export default healthController
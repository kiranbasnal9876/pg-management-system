class Fx{

    sendResponse = (res, { status = true, message, data, statusCode = 200, token, error, ...rest }) => {
        return res.status(statusCode).json({
            status,
            message,
            data,
            token,
            error,
            ...rest
        });
    };

}

export default new Fx;
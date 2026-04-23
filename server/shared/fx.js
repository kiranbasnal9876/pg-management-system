class Fx{

    sendResponse = (res, { status = true, message, data, statusCode = 200 , token , error}) => {
        return res.status(statusCode).json({
            status,
            message,
            data,
            token,
            error
        });
    };

}

export default new Fx;
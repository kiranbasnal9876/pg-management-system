function trimRequestData(req, res, next) {
    const trimStrings = (obj) => {
        if (typeof obj !== 'object' || obj === null) return;

        Object.keys(obj).forEach((key) => {
            const value = obj[key];

            if (typeof value === 'string') {
                obj[key] = value.trim();
            } else if (typeof value === 'object' && value !== null) {
                trimStrings(value); // recursive for nested objects
            }
        });
    };

    trimStrings(req.body);
    trimStrings(req.query);
    trimStrings(req.params);

    next();
}


export default trimRequestData
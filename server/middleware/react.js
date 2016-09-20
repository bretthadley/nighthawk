'use strict';
module.exports = () => {
    return function (req, res, next) {
        if (req.originalUrl.includes('/api/')) {
            next();
        }
        res.sendFile('index.html', { root: req.app.get('public') });
    };
}

const ErrorHander = require("../utils/errorhander.js")
module.exports = (err, req, res, next )=> {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    //wrong mongodb id error
    if(err.name === "CastError"){
        const message = `Resources not found. invalid: ${err.path}`;
        err = new ErrorHander(message, 400);
    }
    res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
}
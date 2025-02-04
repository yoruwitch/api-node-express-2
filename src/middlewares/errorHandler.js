import mongoose from "mongoose";
import BaseError from "../errors/baseError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendResult(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError(erro).sendResult(res);
    } else {
        new BaseError().sendResult(res);
    }
}
export default errorHandler;

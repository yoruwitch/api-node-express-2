/**
 * BaseError is a custom error class that extends the built-in Error class.
 * It is intended to be extended by other error classes to provide consistent error handling.
 * 
 * @param {string} message - The error message.
 * @param {number} status - The HTTP status code.
 */
class BaseError extends Error {
    constructor(message = "Internal Server Error", status = 500) {
        super();
        this.message = message;
        this.status = status;
    }

    sendResult(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status,
        });
    }
}
export default BaseError;

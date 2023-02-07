const CustomApiError = require("./custom-errors");
const { StatusCodes } = require("http-status-codes");
class Unauthenticated extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthenticated;

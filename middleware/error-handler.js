const CustomApiError = require("../errors/custom-errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).send("Something went wrong try again later");
};

module.exports = errorHandlerMiddleware;

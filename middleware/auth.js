const jwt = require("jsonwebtoken");
const CustomApiError = require("../errors/custom-errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomApiError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  next();
};

module.exports = authenticationMiddleware;

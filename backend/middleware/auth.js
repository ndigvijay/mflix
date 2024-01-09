const jwt = require("jsonwebtoken");
require("dotenv").config()

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("No token provided");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send("Failed to authenticate token");
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authMiddleware;

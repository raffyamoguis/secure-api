const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const auth_token = req.header("x-auth-token");
  if (!auth_token)
    return res.status(401).send({
      status: "unauthorized",
      code: 401,
      error: "No auth token provided"
    });

  try {
    const decoded = jwt.verify(auth_token, "jwtPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({
      status: "unauthorized",
      code: 401,
      error: "Token expired"
    });
  }

  next();
};

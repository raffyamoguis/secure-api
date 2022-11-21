const msg = "Access denied";
const forbidden = "forbidden";
const s_code = 403;

function admin(req, res, next) {
  if (!req.user.roles.includes("admin"))
    return res.status(403).send({
      status: forbidden,
      code: s_code,
      error: msg
    });

  next();
}

function editor(req, res, next) {
  if (!req.user.roles.includes("editor"))
    return res.status(403).send({
      status: forbidden,
      code: s_code,
      error: msg
    });

  next();
}

function viewer(req, res, next) {
  if (!req.user.roles.includes("viewer"))
    return res.status(403).send({
      status: forbidden,
      code: s_code,
      error: msg
    });

  next();
}

// export router
module.exports = { admin, editor, viewer };

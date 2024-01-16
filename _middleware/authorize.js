const jwt = require("express-jwt");
const { secret } = require("../_helpers/config.json");
const db = require("_helpers/dbUser");

module.exports = authorize;

function authorize() {
  return [
    // console.log("hihih"),
    // authenticate JWT token and attach decoded token to request as req.user
    jwt({ secret, algorithms: ["HS256"] }),

    // attach full user record to request object
    async (req, res, next) => {
      // get user with id from token 'sub' (subject) property
      // console.log(req.user, "req.user");
      const user = await db.Admin.findByPk(req.user.sub);

      // console.log(user, "user");

      // check user still exists
      if (!user) return res.status(401).json({ message: "Unauthorized !!!" });

      // authorization successful
      req.user = user.get();
      next();
    },
  ];
}

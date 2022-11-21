// file execution command = node password.js

const bcrypt = require("bcrypt");

const pwd = "P@ssword01!";

(async () => {
  // hash the password
  const salt = await bcrypt.genSalt(15);
  console.log(await bcrypt.hash(pwd, salt));
})();

module.exports.signup_get = (req, res) => {
  res.render("signup get");
};

module.exports.signup_post = (req, res) => {
  res.send("signup post");
};

module.exports.login_get = (req, res) => {
  res.render("login get");
};

module.exports.login_post = (req, res) => {
  res.send("login post");
};

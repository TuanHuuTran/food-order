const admin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  return res.redirect("/");
};

export default admin;

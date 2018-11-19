const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // app.use(proxy("/oauth2/**", { target: "http://localhost:8080/" }));
  app.use(proxy("/api/**", { target: "http://localhost:8080/" }));
  // app.use(proxy("/social-login-success", { target: "http://localhost:8080/" }));
};

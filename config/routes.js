module.exports = app => {
  app.post("/signup", app.api.users.save),
  app.get("/signin", app.api.auth.signin)
}
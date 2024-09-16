module.exports = app => {
    const user = require("../controllers/user.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/add_user", user.create);
    router.post("/login", user.login);
  

  
    app.use("/api/user", router);
  };
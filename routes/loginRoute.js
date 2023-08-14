const express = require("express");
const userRoute = express.Router();

let joi = require("joi");

let bcrypt = require("bcrypt");


const { userModel } = require("../schema/userSchema");

userRoute.post("/", async (req, res) => {
  try {
    let { error } = loginvalidation(req.body);
    if (error) return res.send(error.message);

    let currentUserData = await userModel.findOne({
      username: req.body.username,
    });
    if (!currentUserData)
      return res.status(401).send({
        status: "error",
        message: "Invalid username or password ",
      });

    let validPassword = await bcrypt.compare(
      req.body.password,
      currentUserData.password
    ); // both user and pass valid
    // console.log(validPassword)
    if (!validPassword)
      return res.status(401).send({
        status: "error",
        message: "Invalid username or password ",
      });

      res.status(200).send({
      status: "sucess",
      message: "successfully logged",
     
    });
  } catch (error) {
    res.status(400).send({ status: "error", message: error.message })
  }
});

function loginvalidation(userObj) {
  let userVal = joi.object({
    username: joi.string().email({ tlds: { allow: false } }),
    password: joi.string().required(),
  });
  return userVal.validate(userObj);
}

module.exports = userRoute;
// username = susu22@gmail.com 
// username = dudi@gmail.com 
// pass = 1234
// pass = 1234


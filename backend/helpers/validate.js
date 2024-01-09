const User = require("../models/User");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

const validateLength = (text, min, max) => {
  if (text.length < min || text.length > max) {
    return false;
  }
  return true;
};

const validateUsername = async (username) => {
  let a = false;
  do {
    let check = await User.findOne({ username });
    if (check) {
      //changing username to unique
      username = username + Math.floor(Math.random() * 10).toString();
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};

module.exports = { validateEmail, validateLength, validateUsername };

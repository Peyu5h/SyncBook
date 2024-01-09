const User = require("../models/User");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validate");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const check = await User.findOne({ email });
    if (check) {
      return res
        .status(400)
        .json({ message: "This email address already exists" });
    }

    if (!validateLength(first_name, 3, 16)) {
      return res
        .status(400)
        .json({ message: "Name must be between 3 and 16 characters" });
    }

    if (!validateLength(last_name, 3, 16)) {
      return res
        .status(400)
        .json({ message: "Name must be between 3 and 16 characters" });
    }

    if (!validateLength(password, 6, 16)) {
      return res
        .status(400)
        .json({ message: "Password  must be at least 6 characters" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      email,
      password,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    // Return the user information in the response
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

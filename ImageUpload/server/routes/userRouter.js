const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    let { email, password, } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res
        .json({ msg: "An account with this ID already exists.", status: 400 });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.json({status: 200});
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    
    // Check if User ID exist.
    if (!user) 
      return res
        .json({ msg: "No account with this ID has been registered.", status: 'No User' });

    // Check if Password is correct.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ msg: "Sorry, Password is not correct.", status: 'Wrong Password' });

    // when login is succes
    
    const token = jwt.sign({ id: user._id, email: email },  process.env.JWT_SECRET);
    res.json({
      status: 'Success',
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

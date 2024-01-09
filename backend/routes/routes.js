const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = require("../models/users");
// const authMiddleware = require("../middleware/auth");
require("dotenv").config()



router.post("/signup", async (req, res) => {
  try {
    const user = await signup.findOne({ email: req.body.email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const signedUpUser = new signup({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });

      await signedUpUser.save();
      res.status(200).send("User created successfully");
    } else {
      res.status(409).send({ message: "Existing account" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signup.findOne({ email });

    if (!user) {
      return res.status(404).send("Incorrect login credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h", // Token expires in 1 hour
      });

      res.status(200).json({ token });
    } else {
      res.status(401).send("Incorrect login credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});



module.exports = router;

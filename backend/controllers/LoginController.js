const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

require("dotenv").config();

const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.SECRET_TOKEN;

const UserLogin = require("../models/Login");

class LoginController {
  static async handleLogin(req, res) {
    const { email, password } = req.body;

    try {
      const user = await UserLogin.handleLogin(email);

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        return res.status(200).json({ message: "Login successful", token });
      } else {
        return res.status(401).json({ message: "Invalid credentials",  });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = LoginController;

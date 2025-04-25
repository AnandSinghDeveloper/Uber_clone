const userModel = require("../Models/user.modals");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistTokenModel = require("../Models/BlacklistToken.model");
const CaptainModel = require("../Models/captain.modals");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(201).json({ message: "Unathorized" });
  }

  const isBlacklisted = await BlacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(301).json({ message: "Unathorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unathorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(201).json({ message: "Unathorized" });
  }

  const isBlacklisted = await BlacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(301).json({ message: "Unathorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await CaptainModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unathorized" });
  }
};

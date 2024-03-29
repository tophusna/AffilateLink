import ConnectDB from "../../../DB/connectDB";
import User from "../../../models/User";
import Joi from "joi";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  // username: Joi.string().username().required(),
  password: Joi.string().required(),
});

export default async (req, res) => {
  await ConnectDB();

  const { username, password } = req.body;
  const { error } = schema.validate({ password });

  if (error)
    return res.status(401).json({
      success: false,
      message: error.details[0].message.replace(/['"]+/g, ""),
    });

  try {
    const checkUser = await User.findOne({ username });

    console.log('checkUser=>', checkUser)
    if (!checkUser)
      return res
        .status(401)
        .json({ success: false, message: "Account not Found" });

    const isMatch = await compare(password, checkUser.password);

    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });
        
    const token = jwt.sign(
      { id: checkUser._id, username: checkUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    const finalData = { token, user: checkUser };
    return res
      .status(200)
      .json({ success: true, message: "Login Successfull", finalData });
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
};

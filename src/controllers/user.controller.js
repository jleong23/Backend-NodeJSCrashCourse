import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    //! Basic validation
    if (!userName || !email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    //! Check if user exists
    const userExists = await User.findOne({
      email: email.toLowerCase(),
    });

    if (userExists)
      return res.status(400).json({
        message: "User Already Exists!",
      });

    //! Create User
    const user = await User.create({
      userName,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });

    res.status(201).json({
      message: "User Created Successfully",
      user: {
        email: user.email,
        userName: user.userName,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const userExists = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!userExists)
      return res.status(400).json({
        message: "User Not Found",
      });
  } catch {}
};

export { registerUser };

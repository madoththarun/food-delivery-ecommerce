import express from "express";
const userRouter = express.Router();

// Mock database for users (Replace with real DB logic)
const users = [];

// Register User
userRouter.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Check if the user already exists
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Mock user creation
  const newUser = { name, email, password };
  users.push(newUser);

  // Respond with success (and token if needed)
  return res.json({
    success: true,
    message: "User registered successfully",
    token: "mockToken123",
  });
});

// Login User
userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password" });
  }

  // Respond with success (and token if needed)
  return res.json({
    success: true,
    message: "Logged in successfully",
    token: "mockToken123",
  });
});

export default userRouter;

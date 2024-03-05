export const register = (req, res) => {
  res.status(201).json({
    succes: true,
    message: "Register user succesfully",
  });
};

export const login = (req, res) => {
  res.status(200).json({
    succes: true,
    message: "Login user succesfully",
  });
};

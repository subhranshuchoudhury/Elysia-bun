exports.Login = async (req, res) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    res.status = 500;
    return {
      success: false,
      message: "Server failure",
    };
  }
};

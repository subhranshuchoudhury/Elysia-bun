const controller = require("../controllers/forgot-password.controller");
const { validateRequests } = require("../middlewares");

module.exports = function (app) {
  app.post("/api/forgot-password", async (context) => {
    const response = validateRequests.validateForgotPassword(context.body);
    if (!response.success) return response;
    return await controller.ForgotPassword(context, context.set);
  });
};

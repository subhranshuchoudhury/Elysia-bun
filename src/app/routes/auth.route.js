const controller = require("../controllers/login.controller");
const { validateRequests } = require("../middlewares");

module.exports = function (app) {
  app.post("/api/login", async (context) => {
    const response = validateRequests.validLogin(context.body);
    if (!response.success) return response;
    return await controller.Login(context, context.set);
  });
};

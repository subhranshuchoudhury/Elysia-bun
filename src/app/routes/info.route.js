const controller = require("../controllers/info.controller");
const { validateRequests } = require("../middlewares");

module.exports = function (app) {
  app.post("/api/info", async (context) => {
    const response = validateRequests.verifyToken(context.body);
    if (!response.success) return response;
    return await controller.Info(context, context.set);
  });
};

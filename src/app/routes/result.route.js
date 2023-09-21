const controller = require("../controllers/result.controller");
const { validateRequests } = require("../middlewares");

module.exports = function (app) {
  app.post("/api/result", async (context) => {
    const response = validateRequests.validResult(context.body);
    if (!response.success) return response;
    return await controller.Result(context, context.set);
  });
};

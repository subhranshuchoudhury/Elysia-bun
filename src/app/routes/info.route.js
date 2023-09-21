const controller = require("../controllers/info.controller");
const { validateRequests } = require("../middlewares");

module.exports = function (app) {
  app.post("/api/info", async (context) => {
    const response = validateRequests.verifyToken(context.body);
    if (!response.success) return response;
    return await controller.Info(context, context.set);
  });

  app.post("/api/info/time-table", async (context) => {
    const response = validateRequests.verifyToken(context.body);
    if (!response.success) return response;
    return await controller.TimeTable(context, context.set);
  });

  app.post("/api/info/subjects", async (context) => {
    // console.log(context.body);
    const response = validateRequests.validateGetSubjects(context.body);
    if (!response.success) return response;
    return await controller.getSubjects(context, context.set);
  });

  app.post("/api/info/regd-code", async (context) => {
    const response = validateRequests.verifyToken(context.body);
    if (!response.success) return response;
    return await controller.getRegCode(context, context.set);
  });
};

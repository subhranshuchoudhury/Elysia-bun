const z = require("zod");

const validLogin = (context) => {
  const schema = z
    .object({
      regdNo: z.string().max(10).min(10),
      password: z.string().min(1),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const validateRequests = {
  validLogin,
};

module.exports = validateRequests;

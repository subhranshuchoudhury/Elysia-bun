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

const validResult = (context) => {
  const schema = z
    .object({
      token: z.string().min(1),
      regdNo: z.string().max(10).min(10),
      styNumber: z.string().min(1),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const verifyToken = (context) => {
  const schema = z
    .object({
      token: z.string().min(1),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const validateRequests = {
  validLogin,
  validResult,
  verifyToken,
};

module.exports = validateRequests;

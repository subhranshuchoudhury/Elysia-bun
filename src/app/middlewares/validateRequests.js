const z = require("zod");
const { registrationCode } = require("../config/registrationcode");

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

const validateForgotPassword = (context) => {
  const schema = z
    .object({
      regdNo: z.string().max(10).min(10),
      dob: z.string().min(1),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const validateChangePassword = (context) => {
  const schema = z
    .object({
      token: z.string().min(1),
      newPassword: z.string().min(7),
      oldPassword: z.string().min(1),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const validateGetSubjects = (context) => {
  const schema = z
    .object({
      token: z.string().min(1),
      regdNo: z.string().max(10).min(10),
      regdCode: z.string().min(1).default(registrationCode).optional(),
    })
    .strict();

  const response = schema.safeParse(context);
  return response;
};

const validateRequests = {
  validateChangePassword,
  validateForgotPassword,
  validateGetSubjects,
  validLogin,
  validResult,
  verifyToken,
};

module.exports = validateRequests;

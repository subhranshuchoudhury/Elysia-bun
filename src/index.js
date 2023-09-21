import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
const app = new Elysia().use(cors());

app.get("/", () => {
  return { success: "true", message: "Server is working fine." };
});

require("./app/routes/auth.route")(app);
require("./app/routes/result.route")(app);
require("./app/routes/info.route")(app);
require("./app/routes/forgot-password.route")(app);

const PORT = "3000" || String(process.env.PORT);
app.listen(PORT, (res) => {
  console.log(
    `🦊 Elysia Server is running at ${app.server?.hostname}:${app.server?.port}`
  );
});

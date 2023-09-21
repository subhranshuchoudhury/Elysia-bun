import { Elysia } from "elysia";
// import { swagger } from "@elysiajs/swagger";

const app = new Elysia();

app.get("/", () => {
  return { success: "true", message: "Server is working fine." };
});

require("./app/routes/auth.route")(app);
require("./app/routes/result.route")(app);
require("./app/routes/info.route")(app);

const PORT = "3000" || String(process.env.PORT);
app.listen(PORT, (res) => {
  console.log(
    `🦊 Elysia Server is running at ${app.server?.hostname}:${app.server?.port}`
  );
});

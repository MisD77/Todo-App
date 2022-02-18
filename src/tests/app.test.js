const app = require("../server/app");
const request = require("supertest");

//tests the entry point of the app
test("it should respond the message from the get method ", async () => {
  const response = await request(app).get("/api");
  expect(response.body.message).toBe("Welcome to the to-do app!");
});

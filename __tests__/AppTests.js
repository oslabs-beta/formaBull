const Application = require("spectron").Application;
const electronPath = require("electron");
const path = require("path");

let app;

beforeAll(() => {
  app = new Application({
    path: electronPath,

    args: [path.join(__dirname, "../../")],
  });

  return app.start();
}, 15000);

afterAll(function () {
  if (app && app.isRunning()) {
    return app.stop();
  }
});

test("Displays App window", async function () {
  let windowCount = await app.client.getWindowCount();

  expect(windowCount).toBe(1);
});

test("Header displays appropriate text", async function () {
  // const headerElement = await app.client.$("h1");
  // let headerText = await headerElement.getText();
  
  let titleText = "formaBull | Hook 'em by the Horns";
  let title = await app.client.$("title");
  expect(title).toBe(titleText);

  // expect(headerText).toBe("💖 Hello World!");
});

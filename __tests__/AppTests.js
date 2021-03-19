const Application = require("spectron").Application;
const electronPath = require("electron");
const path = require("path");

let app;

beforeAll(() => {
  app = new Application({
    path: electronPath,

    args: [path.join(__dirname, "..")]
  });
  return app.start();
}, 50000);


afterAll(function () {
  if (app && app.isRunning()) {
    // console.log(app)
    return app.stop();
  }
});

test("Displays App window", async function () {
  let windowCount = await app.client.getWindowCount();

  expect(windowCount).toBe(2);
});

test("should launch app", async () => {
  const devTitle = await app.client.getTitle();
  console.log(app)
  expect(devTitle).toBe('DevTools'); 
});
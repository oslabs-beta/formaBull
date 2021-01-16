  // JS way, destructure
  const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({
    width: 1024, 
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: true, THIS HAS CONFLICT WITH TYPESCRIPT
      webSecurity: false,
    }
  });

  
  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(false); //NOTE changed from null to false
  
      // load a website to display
      window.loadFile('index.html'); //This is just for production, not used for development
      window.loadURL(`http://localhost:4000`); // development 
      window.webContents.openDevTools(); 
    });







// import { app, BrowserWindow } from "electron";
// import * as path from "path";
// import * as url from "url";

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       webSecurity: false,
//     },
//   });

//   if (process.env.NODE_ENV === "development") {
//     mainWindow.loadURL(`http://localhost:4000`);
//     mainWindow.webContents.openDevTools();
//   } else {
//     mainWindow.loadFile('index.html');
//   }

//   mainWindow.on("closed", () => {
//     mainWindow = null;
//   });
// }

// app.on("ready", createWindow);
// app.allowRendererProcessReuse = true;

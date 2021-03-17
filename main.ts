const { app, BrowserWindow } = require('electron');
import * as path from "path";
import * as url from "url";

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 1024, 
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    }
  });
  
  window.setMenuBarVisibility(false);
  
  window.loadFile('index.html');
  window.loadURL(`http://localhost:4000`); 
  window.webContents.openDevTools(); 
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// app.on('activate', () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     app.on('ready', () => {
//       // once electron has started up, create a window.
//       const window = new BrowserWindow({
//         width: 1024, 
//         height: 768,
//         webPreferences: {
//           nodeIntegration: true,
//           contextIsolation: false,//THIS HAS CONFLICT WITH TYPESCRIPT
//           webSecurity: false,
//         }
//       });
      
//       // hide the default menu bar that comes with the browser window
//       window.setMenuBarVisibility(false); //NOTE changed from null to false
      
//       // load a website to display
//       window.loadFile('index.html'); //This is just for production, not used for development
//       window.loadURL(`http://localhost:4000`); // development 
//       // if(process.env.NODE_env === 'production') 
//       window.webContents.openDevTools(); 
//     });
//   }
// });
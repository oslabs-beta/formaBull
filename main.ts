// JS way, destructure
const { app, BrowserWindow } = require('electron');


app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({
    width: 1024, 
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,//THIS HAS CONFLICT WITH TYPESCRIPT
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

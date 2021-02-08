const { app, BrowserWindow } = require('electron');

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

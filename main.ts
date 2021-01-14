  // JS way, destructure
const { app, BrowserWindow } = require('electron');
  // TS way
// import app = require('electron');
// import BrowserWindow = require('electron');
  // TS way, destructure
// import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({ 
    width: 1024, 
    height: 768, 
    webPreferences: {
      contextIsolation: true
      }
  });

  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(false); //NOTE changed from null to false



  // load a website to display
  window.loadFile('index.html');
});
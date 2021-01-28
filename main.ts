/**
 
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

Or 

*/
// import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
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


// app.whenReady().then(() => {
//   installExtension(REACT_DEVELOPER_TOOLS)
//       .then((name) => console.log(`Added Extension:  ${name}`))
//       .catch((err) => console.log('An error occurred: ', err));
// }); 
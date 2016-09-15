/* jshint esversion: 6 */
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;


let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/views/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', closeWindow);
}

function closeWindow() {
  mainWindow = null;
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

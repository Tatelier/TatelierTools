import { app, BrowserWindow } from 'electron';
const path = require('path');
const url = require('url');

let win: BrowserWindow | null = null;

function createWindow() {
    win = new BrowserWindow({ width: 960, height: 640 });

    win.loadURL(url.format({
    pathname: path.join(__dirname, '../cli/index.html'),
      protocol: 'file:',
      slashes: true
    }));
    win.webContents.openDevTools();

    win.on('closed', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
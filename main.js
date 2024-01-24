const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Lolo',
        width: 800,
        height: 600,
    });
    mainWindow.setMenuBarVisibility(false);
   /* const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    });*/

    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

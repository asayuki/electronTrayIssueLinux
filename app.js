const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 300,
        frame: false,
        resizable: false,
        show: false,
        transparent: true
    });

    const iconPath = path.join(__dirname, `./icon.png`);

    let tray = new Tray(iconPath);
    tray.on('click', (event, bounds) => {
        console.log(bounds);
    });
});
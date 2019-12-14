/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { app, BrowserWindow,Menu } = require('electron');
var path = require('path');

require('electron-reload')(__dirname);

app.on('ready', ()=>{
    // Menu.setApplicationMenu(null);
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreenable:false,
        icon:path.join(__dirname, 'assets/icons/png/512x512.png'),
        webPreferences: {
          nodeIntegration: true
        }
    });
    win.loadFile('index.html');
    win.loadURL(`file://${__dirname}/index.html`);
});

app.on('close',()=>{
    win = null;
});
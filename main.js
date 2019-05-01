const { app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow({ width: 1280, height: 720, icon: "./iconos/icon.png" })

    win.loadFile('index.html')
}

app.on('window-all-closed', () => app.quit())

app.on('ready', createWindow)
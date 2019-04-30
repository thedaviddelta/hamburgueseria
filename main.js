const { app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow({ width: 900, height: 600 })

    win.loadFile('index.html')
}

app.on('window-all-closed', () => app.quit())

app.on('ready', createWindow)
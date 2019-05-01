const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
    let win = new BrowserWindow({ 
        width: 1280, 
        height: 720, 
        icon: "./iconos/icon.png", 
        webPreferences: { nodeIntegration: true }
    })

    win.loadFile('index.html')

    let menuTemplate = [
        {
            label: "Archivo",
            submenu: [
                {
                    label: "Salir",
                    role: "quit",
                    accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q"
                }
            ]
        },
        {
            label: "Ver",
            submenu: [
                {
                    label: "Recargar",
                    role: "reload"
                },
                {
                    label: "Herramientas de desarrollador",
                    role: "toggledevtools"
                },
                {
                    label: "Pantalla completa",
                    role: "togglefullscreen"
                }
            ]
        }
    ];

    if (process.platform === 'darwin')
        menuTemplate.unshift({});
    
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

app.on('window-all-closed', () => app.quit())

app.on('ready', createWindow)
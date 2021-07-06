const {app, BrowserWindow, Menu} = require('electron');

const url = require("url");
const path = require("path");
const iconPath = process.platform !== 'darwin'
    ? 'src/assets/icons/favicon.ico'
    : 'src/assets/icons/favicon.icns';

let mainWindow;

function createMenu() {

    const menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'Home',
                    click() {
                        mainWindow.webContents.send('goToHome');
                    }
                },
                {
                    label: 'About',
                    click() {
                        mainWindow.webContents.send('goToAbout');
                    }
                },
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

function createWindow() {

    mainWindow = new BrowserWindow({
        show: false,
        title: "Nivantis",
        icon: path.join(__dirname, iconPath),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.maximize();
    mainWindow.show();

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `./dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    mainWindow.webContents.openDevTools()

    createMenu();

    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

console.log(app);
app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
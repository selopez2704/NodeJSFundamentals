// const electron= require('electron');
const {app,BrowserWindow} = require('electron');

// console.log(electron)

let mainWindow

app.on('ready', CreateWindow)

function CreateWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
    })
    mainWindow.loadFile('index.html')
}
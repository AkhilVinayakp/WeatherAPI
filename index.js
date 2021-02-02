// importing electron
const electron = require('electron')
// the app property > overall running process
// every other process such as window is controlled from of the app
const { app } = electron;
const { BrowserWindow } = electron; // getting the window
// event when the app is ready
// event based programming
app.on('ready', ()=>{
    //testing
    // console.log('app is on');
    const  main = new BrowserWindow();
    main.loadURL(`file://${__dirname}/templates/index.htmlS`)
});
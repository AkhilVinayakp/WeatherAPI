// importing electron
const electron = require('electron')
// the app property > overall running process
// every other process such as window is controlled from of the app
const { app } = electron;
const { BrowserWindow } = electron; // getting the window
// getting python shell to initiate the flask api
const { PythonShell } = require('python-shell');
// function to create the subprocess
// initialising server
function startServer(){
    let options = {
        mode: 'text',
        pythonOptions:['-u'], // real time output
        scriptPath:`file://${__dirname}/api`
    };
    PythonShell.run('weather.py', options, function (err,result)=>{
        return NaN;
    });
}

// event when the app is ready
// event based programming
app.on('ready', ()=>{
    //testing
    // console.log('app is on');

    // starting the flask server for handling background data


    const  main = new BrowserWindow();
    main.loadURL(`file://${__dirname}/templates/index.html`)
});
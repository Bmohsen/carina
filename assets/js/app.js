/* eslint-disable no-undef */
const {
    dialog
} = require('electron').remote;
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

let choose = document.querySelector("#choose");
let filesList = document.querySelector("#listfiles");
let result = document.querySelector("#result");
let selectFolder = document.querySelector("#mfolders");
let defualtExtName = [];
let filesHolder = [];
let getTypes = document.querySelector("#gettype");
let folderPath = '';

/**
 * event listener for file types
 */
getTypes.addEventListener('click', () => {
    let getFilesType = document.getElementById("filetype").value;
    if (getFilesType === '') {
        $.iaoAlert({
            autoHide: true,
            roundedCorner: true,
            type: "warning",
            alertTime: "3000",
            msg: 'Please Enter file types!'
        });
    }
    defualtExtName = getFilesType.split(',');
    console.log(defualtExtName);
});
/**
 * event listener for directory selector
 */
choose.addEventListener('click', function () {
    let getPath = dialog.showOpenDialog({
        title: "choose path of your movies or series",
        properties: ['openDirectory']
    });
    getPath.then(function (res) {
        folderPath = res.filePaths[0];
        $.iaoAlert({
            autoHide: true,
            roundedCorner: true,
            type: "success",
            alertTime: "3000",
            msg: `selected path : ${folderPath}`
        });
        /**
         * pass the folder path
         */
        filesHolder = [];
        listFiles(folderPath);
    }).catch(function (err) {
        $.iaoAlert({
            autoHide: true,
            alertTime: "3000",
            roundedCorner: true,
            type: "warning",
            msg: `Error ${err}`
        });
    });
});

function listFiles(folderPath) {
    let fileCounter = 0;
    filesList.innerHTML = '';
    result.innerHTML = '';
    if (folderPath === undefined) {
        filesList.innerHTML = `<p>please select path first</p>`;
    } else {
        filesList.innerHTML = `<p>${folderPath} </p>`;
    }
    fs.readdir(folderPath, function (err, files) {
        /**
         * Error handler
         */
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        /**
         * listing all files
         */
        files.forEach(function (file) {
            for (let i = 0; i < defualtExtName.length; i++) {
                /**
                 * loop through array of files extention and finding match
                 */
                if (file.endsWith(defualtExtName[i])) {
                    fileCounter++;
                    /**
                     * add files into an array
                     */
                    filesHolder.push(file);
                    console.log(filesHolder);
                    filesList.innerHTML += `<a href="#">${file}</a>`;
                }
            }
        });
        result.innerHTML += `<p>found ${fileCounter} files</p>`;
    });
}
selectFolder.addEventListener('click', function () {
    filesHolder.forEach(function (file) {
        let srcPath = folderPath + '/' + file; // /home/alzu/Pictures/Webcam/screenshot.png
        let destPath = folderPath + '/' + path.parse(file).name + '/' + file; 
        if (!fs.mkdirSync(folderPath + '/' + path.parse(file).name)) {
            fse.move(srcPath,destPath).then(()=>{
                console.log('file(s) moved');
                $.iaoAlert({
                    autoHide: true,
                    alertTime: "3000",
                    roundedCorner: true,
                    type: "success",
                    msg: `file(s) moved`
                });
            }).catch(er =>{
                console.log(er);
                $.iaoAlert({
                    autoHide: true,
                    alertTime: "3000",
                    roundedCorner: true,
                    type: "warning",
                    msg: `somthing went wrong!`
                });
            });
        }
    })
});
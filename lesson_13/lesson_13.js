const fs = require('fs');
const path = require('path');

const getDirStructure = function (dir) {
    let outDirs = [];
    let outFiles = [];

    const fsReader = function (dir) {
        outDirs = [...outDirs, dir];
        let files = fs.readdirSync(dir);
        for (let i in files) {
            let name = `${dir}/${files[i]}`;
            fs.statSync(name).isDirectory() ? fsReader(name) : outFiles = [...outFiles, name];
        }
    };
    if (dir.length) fsReader(dir);

    return {files: outFiles, dir: outDirs};
};

console.log(JSON.stringify(getDirStructure('..'), null, 2));

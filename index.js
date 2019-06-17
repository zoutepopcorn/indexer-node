#!/usr/bin/env node
const fs = require('fs');
const glob = require("glob")

glob("**/*(js|css)/*", {}, function (er, files) {
    console.log(files)
    console.log('----')
    const css = []
    const js = []
    for(const file of files) {
        // console.log(file)
        if(file.endsWith('js')) {
            js.push(file)
        } else if(file.endsWith('css')) {
            css.push(file)
        }
    }
    console.log(js)
    console.log(css)
    const jsContent =
`const jsFiles = ${JSON.stringify(js)};
const cssFiles = ${JSON.stringify(css)};`;

    fs.writeFile('fileList.js', jsContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})
let ejs = require('ejs');
const yaml = require('js-yaml');
const makeDir = require('make-dir');
const fs = require('fs');
const path = require('path');
const output = 'doc/index.html';
const template = './template/default.html'

try {
    const data = yaml.safeLoad(fs.readFileSync('main.yaml', 'utf8'));
    console.log(data);

    ejs.renderFile(template, {domains:data}, {}, function (err, str) {
        console.info(err,str);

        makeDir(path.dirname(output))
        fs.writeFileSync(output,str,{flag:'w'});
    });
} catch (e) {
    console.log(e);
}

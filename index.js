let ejs = require('ejs');
const yaml = require('js-yaml');
const makeDir = require('make-dir');
const fs = require('fs');
const outputDir = './doc';
const templateDir = './template';
const yamlFile = 'main.yaml';
const separator = '/';
const ncp = require('ncp').ncp;

try {
    const iconDir = 'icons';
    const templateFile = 'index.html';
    const outputFile = 'index.html';
    const data = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));
    ejs.renderFile(templateDir + separator + templateFile, {domains: data}, {}, function (err, str) {
        // 1. mkdir
        makeDir(outputDir)
        // 2. render template
        fs.writeFileSync(outputDir + separator + outputFile, str, {flag: 'w'});
        // 3. copy icons
        ncp(templateDir + separator + iconDir, outputDir + separator + iconDir,function(err){
            if(err){
                console.error(err);
            }
        });
    });
} catch (e) {
    console.log(e);
}

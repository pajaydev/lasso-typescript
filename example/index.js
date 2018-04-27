const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

lasso.configure({
    'plugins': [
        'lasso-less',
        'lasso-typescript'
    ],
    'urlPrefix': '/static',
    'outputDir': path.join(__dirname, 'build/static'),
    'fingerprintsEnabled': true,
    'minify': false,
    'resolveCssUrls': true,
    'bundlingEnabled': true,

});


lasso.lassoPage({
    name: 'my-page',
    dependencies: [
        path.join(__dirname, 'src/browser.json')
    ]
}, function (err, result) {
    if (err) {
        throw err;
    }

    let templatePath = path.join(__dirname, 'src/index.mustache');

    let mustacheSource = fs.readFileSync(templatePath, { encoding: 'utf8' });

    let html = mustache.render(mustacheSource, {
        lassoHead: result.getHeadHtml(),
        lassoBody: result.getBodyHtml()
    });

    let buildDir = path.join(__dirname, 'build');

    try {
        fs.mkdirSync(buildDir);
    } catch (e) { }

    let outputHtmlFile = path.join(buildDir, 'index.html');

    fs.writeFileSync(outputHtmlFile, html, { encoding: 'utf8' });

    console.log(`HTML page successfully written to "${outputHtmlFile}"!`);
});
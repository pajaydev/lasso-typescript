const lasso = require('lasso');
const fs = require('fs');
const path = require('path');

module.exports = (lasso, config) => {
    console.log("***lasso typescript***");
    let extension = config.extensions || ['ts']
    lasso.dependencies.registerRequireType('ts', {

        properties: { 'path': 'string' },

        init: function (lassoContext) {
            const modulePath = this.resolvePath(this.path);
            const exec = require('child_process').exec;
            return new Promise(function (resolve, reject) {
                let childProcess = exec(`tsc ${modulePath}`);
                childProcess.stdout.on('data', function (d) { console.log(d); });
                childProcess.stderr.on('data', function (d) { console.log(d); });

                childProcess.on('exit', function (code) {
                    if (code !== 0) {
                        reject();
                    }
                    resolve();
                });
            });
        },

        getLastModified: function (lassoContext) {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    });
};
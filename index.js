'use strict';

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

/**
 * Copy files for screenshoter-report-analyzer to the specified directory.
 *
 * @param {String} dest The destination directory
 * @param {Object} options Optional parameters.
 *    injectToHead: HTML string to inject into the end of the <head> section.
 * @param {Promise} a promise
 */
function setup(dest, options) {
  const src = path.join(__dirname, 'dist');
  return fse.copy(src, dest).then(() => {
    if (!options || !options.injectToHead) {
        return;
    }
    const indexFile = path.join(dest, 'index.html');
    const endOfHead = /(<\/head\s*>)/i;
    let html = fs.readFileSync(indexFile, {encoding: 'utf-8'});
    html = html.replace(endOfHead, match => { return options.injectToHead + match; });
    fs.writeFileSync(indexFile, html, {encoding: 'utf-8'})
    return;
  });
}

module.exports.setup = setup;

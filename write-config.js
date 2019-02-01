// External Libraries
const fs = require('fs');
const { formatSuccess, formatError } = require('@gh-conf/gh-conf-response')
const { validatePath } = require('@gh-conf/gh-conf-validate');
const { addSlash } = require('@gh-conf/gh-conf-path');
const { GH_PATH } = require('@gh-conf/gh-conf-constants');


/**
 * Write git config, by appending GIT_CONFIG_PATH to input path
 * @param {String} path 
 * @param {String} content
 */
const writeConf = (path, content) => {

  return new Promise((resolve, reject) => {

    // Validate input path
    validatePath(path, GH_PATH['CONFIG']);

    // Check and add ending slash if does not exists
    path = addSlash(path);

    // Validate if input content is empty
    if (!content || content.length === 0) {
      return reject(formatError('No content to write'));
    }

    // Write content to config by path
    fs.writeFile(`${path}${GH_PATH['CONFIG']}`, content, 'utf8', function (err) {
      if (err) {
        return reject(formatError(`${path}${GH_PATH['CONFIG']} not found`, err));
      }

      return resolve(formatSuccess('Config updated', { content: content }));
    });
  });
};


module.exports = writeConf;


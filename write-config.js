// External Libraries
const fs = require('fs');
const { formatSuccess, formatError } = require('@gh-conf/gh-conf-response')
const { validatePath } = require('@gh-conf/gh-conf-validate');
const { addSlash } = require('@gh-conf/gh-conf-path');

// Constants
const GIT_CONFIG_PATH = '.git/config'


/**
 * Write git config, by appending GIT_CONFIG_PATH to input path
 * @param {String} path 
 * @param {String} content
 */
const writeConf = (path, content) => {

  return new Promise((resolve, reject) => {

    // Validate input path
    validatePath(path, GIT_CONFIG_PATH);

    // Check and add ending slash if does not exists
    path = addSlash(path);

    // Validate if input content is empty
    if (!content || content.length === 0) {
      return reject(formatError('No content to write'));
    }

    // Write content to config by path
    fs.writeFile(`${path}${GIT_CONFIG_PATH}`, content, 'utf8', function (err) {
      if (err) {
        return reject(formatError(`${path}${GIT_CONFIG_PATH} not found`, err));
      }

      return resolve(formatSuccess('Config updated', { content: content }));
    });
  });
};


module.exports = writeConf;


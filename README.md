# gh-conf-write

Write content to github config file

[![Build Status](https://travis-ci.com/gh-conf/gh-conf-write.svg?branch=master)](https://travis-ci.com/gh-conf/gh-conf-write)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/gh-conf-write.svg)](https://github.com/gh-conf/gh-conf-write)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/gh-conf-write.svg)](https://github.com/gh-conf/gh-conf-write/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/gh-conf-write.svg)](https://github.com/gh-conf/gh-conf-write/commits/master)
[![NPM Version](https://img.shields.io/npm/v/@gh-conf/gh-conf-write.svg)](https://www.npmjs.com/package/@gh-conf/gh-conf-write)

It reads the github config file and returns it contents.
It needs respository path as input to read the config.

> Give us a :star: if you like our work :heart:

<a href="https://www.buymeacoffee.com/gh-conf" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work


## Install

```
$ npm install @gh-conf/gh-conf-write
```


## Usage

```javascript
const { writeConf } = require('@gh-conf/gh-conf-write');

(async () => {
  try {
    const writeResult = await writeConf('./gh-conf-write', 'CONTENT');
    console.log(writeResult);
    /**
     * {
     *   status: 'success',
     *   message: 'Config updated',
     *   data: {
     *       content: 'CONTENT'
     *   }
     * }
     **/
  } catch (error) {
    console.log(error);
  }
})();

```


## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-conf-write/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase


## Contributors

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>  <a href="https://github.com/justingolden21"><img src="https://github.com/justingolden21.png" width="30" /></a>  <a href="https://github.com/bojanadjordjevic"><img src="https://github.com/bojanadjordjevic.png" width="30" /></a>  <a href="https://github.com/myles-painter"><img src="https://github.com/myles-painter.png" width="30" /></a>

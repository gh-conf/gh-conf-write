const expect = require('chai').expect;

const { writeConf } = require('../index');

const CONFIG_CONTENT = `[core]
\trepositoryformatversion = 0
\tfilemode = true
\tbare = false
\tlogallrefupdates = true
[remote "origin"]
\turl = git@github.com:gh-conf/gh-conf-write
\tfetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
\tremote = origin
\tmerge = refs/heads/master
`

describe('Should validate all github write config tests', () => {
  it('should throw an error of no path', async () => {
    writeConf().catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal('No path input');
      expect(err.data).to.deep.equal({});
    });
  });
  it('should throw an error of not including git/config in path', () => {
    writeConf('../.git/config').catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal(`Pass only repository path, do not include '.git/config'`);
      expect(err.data).to.deep.equal({});
    });
  });
  it('should throw file not found error', () => {
    writeConf('../', 'CONTENT').catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal(`../.git/config not found`);
      expect(typeof err.data).to.equal('object');
    });
  });
  it('should throw file no content error', () => {
    writeConf('./').catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal('No content to write');
      expect(typeof err.data).to.equal('object');
    });
  });
  it('should return git/config file content', async () => {
    const response = await writeConf('./', CONFIG_CONTENT);
    expect(response).to.deep.equal({
      status: 'success',
      message: 'Config updated',
      data: { 
        content: CONFIG_CONTENT 
      }
    });
  });
});
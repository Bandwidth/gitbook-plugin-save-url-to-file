var axios = require('axios');
var fs = require('fs');

var hooks = {};

const download = (url, dest) => {
  return axios.request({
    responseType: 'arraybuffer',
    url: url,
    method: 'get',
  }).then((result) => {
    fs.writeFileSync(dest, result.data);
    return outputFilename;
  })
  .catch(e => {
    console.log('error saving url');
  });
}

hooks.init = function() {
  console.log('hi');
  var urls = this.options.pluginsConfig && this.options.pluginsConfig.saveUrl && this.options.pluginsConfig.saveUrl;
  for (i = 0; i < urls.length; i++) {
    let fileName = download(urls[i].url, urls[i].dest);
    console.log(`Saved ${fileName}`);
  }
};

module.exports = hooks;
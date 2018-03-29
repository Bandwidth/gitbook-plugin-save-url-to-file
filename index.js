var axios = require('axios');
var fs = require('fs-extra');
var path = require('path');

var hooks = {};

const download = (url, dest) => {
  return axios.request({
    responseType: 'arraybuffer',
    url: url,
    method: 'get',
  }).then((result) => {
    var bookPath = '_book/'+dest;
    fs.writeFileSync(dest, result.data);
    fs.ensureFileSync(bookPath);
    fs.copySync(dest, bookPath);
    return dest;
  })
  .catch(e => {
    console.log(e)
    console.log('error saving url');
  });
}

module.exports = {
  hooks: {
    "init": function() {
        var urls = this.options.pluginsConfig && this.options.pluginsConfig.saveUrls && this.options.pluginsConfig.saveUrls.urls;
        for (i = 0; i < urls.length; i++) {
          let fileName = download(urls[i].url, urls[i].dest);
        }
      }
    }
};

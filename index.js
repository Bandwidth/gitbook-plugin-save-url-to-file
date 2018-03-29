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

var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var content = "";
    response.on('data', function (data) {
      content += data;
    });

    response.on('end', function () {
      callback(content);
    });
  });
};
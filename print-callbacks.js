var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);

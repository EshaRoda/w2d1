var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
   var content = "";
    response.on('data', function (data) {
      content += data;
    });
    response.on('end', function () {
      console.log(content);
    });
  });
}

getAndPrintHTML();

var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

var req = http.request(options);

req.on('response', function(res) {
   res.setEncoding('utf8');
   res.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
   });
});

req.on('error', function(e){
    console.log('error: ' + e.message);
})

req.end();
let port = process.env.PORT || 8080;
let express = require('express');
let compression = require('compression');
let app = express();
let enforce = require('express-sslify');

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku).
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());

app.get('*', function(req, res, next) {
  console.log('hello 1');
  if (req.headers.host.slice(0, 3) !== 'www') {
    res.redirect(301, 'https://www.' + req.headers.host + req.url);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  console.log('hello 2');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
    console.log('server is now starting on port ', port);
});

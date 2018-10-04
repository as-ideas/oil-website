let port = process.env.PORT || 8080;
let express = require('express');
let compression = require('compression');
let app = express();
let enforce = require('express-sslify');

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku).
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res, next) {
  if (req.headers.host.slice(0, 3) !== 'www') {
    console.log('Hello iam log: ', req, res, next);
    res.redirect('https://www.' + req.headers.host + req.url, 301);
  } else {
    next();
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

app.listen(port, function () {
    console.log('server is now starting on port ', port);
});

let port = process.env.PORT || 8080;
let express = require('express');
let compression = require('compression');
let app = express();
let enforce = require('express-sslify');
const cors = require('cors');

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku).
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());
app.use(cors(), express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log('server is now starting on port ', port);
});

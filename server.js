let port = process.env.PORT || 8080;
let express = require('express');
let compression = require('compression');
let secure = require('ssl-express-www');
let app = express();

app.use(compression());
// Force SSL(HTTPs) when HTTP is required
app.use(secure);
app.use(express.static(__dirname + '/public'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
    console.log('server is now starting on port ', port);
});

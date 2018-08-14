let port = process.env.PORT || 8080;
let express = require('express');
let compression = require('compression');
let app = express();

app.use(compression());
app.use(express.static(__dirname + '/public'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function () {
    console.log('server is now starting on port ', port);
});

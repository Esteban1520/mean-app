const express = require('express');
const app = express();

app.use(express.static('./dist/client'));

app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

console.log('Console listening!');
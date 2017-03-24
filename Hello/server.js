var express = require('express');
var app = express();

app.use(express.static('dist'));
app.listen(3000, doit);

function doit() {
    console.log('express :3000');
}

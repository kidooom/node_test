#!/usr/bin/env node
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello express!');
});

app.listen(3000);
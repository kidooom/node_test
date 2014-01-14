#!/usr/bin/env node
var fs = require('fs');

var json_reader = exports;

json_reader.read = function(filename, callback){
    fs.readFile(filename, "utf8", function(err, data){
        if (err){
            callback(err);
            return
        }
        
        try{
            var json = JSON.parse(data);
        } catch(e){
            callback(e);
        }
        callback(null, json);
    });
};
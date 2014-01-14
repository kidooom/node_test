#!/usr/bin/env node
var assert = require("assert");
var json_reader = require("../json_reader");
var path = require('path');

describe("json_reader", function(){
    describe(".read()" , function(){
        it("read test01.json", function(done) {
            json_reader.read(path.join(__dirname, "test01.json"), function(err, data){
                assert.ifError(err);
                assert.equal("foo", data.value1);
                assert.equal("bar", data.value2);
                done();
            });
            
        });
    });    
});

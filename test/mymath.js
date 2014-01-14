var assert = require('assert');
var mymath = require('../mymath');

describe('mymath', function (){
    describe('.add()', function(){
        it('args(1,2) then return 3', function(){
            assert.equal(3, mymath.add(1,2));
        });
    });
    describe('.multiply()', function(){
        it('args(2,3) then return 6', function(){
            assert.equal(6, mymath.multiply(2,3));
        });
    });
    
    describe('.absolute', function(){
        it('arg(2) then return 2', function(){
            assert.equal(2, mymath.absolute(2));
        });
        it('arg(-2), then return 2', function(){
            assert.equal(2, mymath.absolute(-2));
        });
        
    });
});

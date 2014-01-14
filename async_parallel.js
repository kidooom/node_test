var async = require('async');

async.parallel([
    function (callback) {
        console.log('call function01');
        setTimeout(function (){
            console.log("do function01");
            callback(null, "result1")
        }, 1000);
    },
    function (callback) {
        console.log('call function02');
        setTimeout(function (){
            console.log("do function02");
            callback(null, "result2")
        }, 100);
    },
    function (callback) {
        console.log('call function03');
        setTimeout(function (){
            console.log("do function03");
            callback(null, "result3")
        }, 500);
    }
],  function (err, results) {
        console.log(results);
});


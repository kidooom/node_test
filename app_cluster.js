var cluster = require("cluster");
var size = 4;

if (cluster.isMaster) {
    for (var i = 0; i < size; i++) {
        cluster.fork();
    }
    cluster.on("exit", function (worker){
        console.log("worker " + worker.process.pid + " disconneted." );
    });
} else {
    require("./express");
}


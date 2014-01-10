var EventEmitter = require("events").EventEmitter;
var mysource = new EventEmitter();
mysource.val = 'rorarora';
mysource.doit = function(data){
  this.emit('turnA', data);
};

mysource.on('turnA', function(data) {
  console.log("invoked by " + data + "!");
});

mysource.doit('rorarora');


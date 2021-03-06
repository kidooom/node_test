// underscore.jsをひたすら体験してみるjs
var _ = require('underscore');

console.log('');

console.log('_.each(list, iterator)');
_.each([1,3,5], function(num){
  console.log(num);
});

console.log('map(list, iterator)');
var map_result = _.map([1,3,5], function(num){
  return num * num;
});
console.log(map_result);

console.log('reduce(list, iterator, memo)');
var reduce_result = _.reduce([1,2,3], function(memo, num){
  return memo + num + "";
}, 2);
console.log(reduce_result);

console.log('reduceRight(list, iterator, memo)');
var reduce_result = _.reduceRight([1,2,3], function(memo, num){
  return memo + num + "";
}, 2);
console.log(reduce_result);

console.log('detect(list, iterator): 最初に見つかった値');
console.log(_.detect([1,2,3,4,5], function(num){
  return num % 2 === 0;
}));

console.log('select(list, iterator): 満たす値');
console.log(_.select([1,2,3,4,5], function(num){
  return num % 2 === 0;
}));

console.log('reject(list, iterator): 満たさない値');
console.log(_.reject([1,2,3,4,5], function(num){
  return num % 2 === 0;
}));

console.log('all(list, iterator): 全部満たしてるかどうか');
console.log(_.all([1,2,3,4,5], function(num){
  return num % 2 === 0;
}));

console.log('any(list, iterator): 一つでも満たしているかどうか');
console.log(_.any([1,2,3,4,5], function(num){
  return num % 2 === 0;
}));

console.log('include(list, value): listの中にvalueが含まれているかどうか');
console.log(_.include([1,2,3], 1));

console.log('invoke(list, methodName, arguments): listの各要素にmethodNameで指定した関数を実行');
console.log(_.invoke([3,7,4], 'toString'));

console.log('pluck(list, propertyName): 指定したプロパティ名に対応する値を集める');
console.log(_.pluck([{name: 'kazuya', age:20},{name: 'oribe', age: 33}], 'name'));

console.log('max(list, iterator): listの中の最大値を求める。iteratorを渡したらその帰り値が基準になる');
console.log(_.max([1,2,3,4,5], function(num){return -num}));

console.log('min(list, iterator): listの中の最小値を求める');
console.log(_.min([1,2,3,4,5], function(num){return -num}));

console.log('sortBy(list, iterator): 各要素をiteratorの返り値でランク付けしてソートしたlistを返す');
console.log(_.sortBy([3,2,1,4,5], function(num){
  return num;
}));

console.log('sortedIndex(list, value, iterator): ２文探索で、valueがlistの挿入されるべき位置を調べ、そのindexを渡す。');
console.log(_.sortedIndex([1,2,4,5], 3));

console.log('toArray(list): listをArrayに変換する');
var toArrayResult = function(){
  return _.toArray(arguments).slice(0);
}(1,2,3);
console.log(toArrayResult);

console.log('size(list)');
console.log(_.size([1,2,3,4,5]));

console.log('memoize(function, [hashFunction]): 関数の計算結果をキャッシュする。メモ化。');
var fibonacci = function(n){
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
};
var fastFibonacci = _.memoize(fibonacci);
console.log(fastFibonacci(10));
console.log(fastFibonacci(10));

console.log('once(function)');
var onceMethod = _.once(function(){
  console.log('一回しか言わないぞ!!');
});
onceMethod();
onceMethod();

console.log('wrap(function, wrapper): 最初の引数で指定した関数をwrapper関数の中にラップする');
var hello = function(name){
  return 'hello ' + name;
}
hello = _.wrap(hello, function(func){
  return "hey! " + func("kazuya") + ". 久しぶり!";
});
console.log(hello());

console.log('extend(destination, *sources): sourcesオブジェクトのすべてのプロパティをdesticationオブジェクトにコピーする。');
console.log(_.extend({name: 'tom'}, {name: 'kazuya', age:33}));

console.log('defaults(object, *defaults): objectがdefaultsオブジェクトのプロパティを持っていない場合、objectにそのdefaltsオブジェクトのプロパティを付与する');
console.log(_.defaults({name: 'kazuya'}, {name: 'hiroshi', age: 33}));

console.log('ランダム値取得: _.random(min, max) ');
console.log(_.random(0,100));


console.log([251,266,134].sort(function(a, b){if(a>b)return 0; return 1;}));
console.log(_.sortBy([251,266,134], function(a){
  return -parseInt(a, 10);
}));

var CloneTest = function(){
  this.id = 100;
  this.secret = "secret";
};

var userTickets = [
  {id: "10", expiredAt: "12345", amount: 5},
  {id: "10", expiredAt: "45678", amount: 3},
  {id: "11", expiredAt: "98765", amount: 2}
];

var theTicket = _.detect(userTickets, function(ticket){
  return ticket.expiredAt === '45678';
});

console.log('the ticket id is ' + theTicket.id + ' expiredAt is ' + theTicket.expiredAt);

var totalTicketAmount = _.reduce(userTickets, function(memo, ticket){
  return memo + ticket.amount;
}, 0);
console.log("totalTicketAmount = " + totalTicketAmount);

_.each(userTickets, function(ticket) {
  ticket.amount -= 1;
});

_.each(userTickets, function(ticket) {
  console.log('after ticket id = ' + ticket.id + ', expiredAt = ' + ticket.expiredAt + ', amount = ' + ticket.amount)
})


var arrayTest = {};
arrayTest[1] = {};
arrayTest[1][100] = {materials: [1,2,3,4]};
arrayTest[2] = {};
arrayTest[2][100] = {materials: [4,5,6]};

_.each(arrayTest, function(hoge) {
  _.each(hoge, function(foo) {
    _.each(foo.materials, function(material) {
      console.log('material: ' + material);
    });
  });
});


var materialIds = _.uniq(_.flatten(_.map(arrayTest, function(hoge) {
  return _.map(hoge, function(foo) {
    return foo.materials;
  });
})));


materialIds = _.uniq(materialIds, false);
console.log('materialIds : ' + materialIds);

var targetId = 7;
var existTarget = _.contains(materialIds, targetId);

console.log('targetExistance is ' + !!existTarget);



var characters = [
  {id:1, number: 1},
  {id:2, number: 2},
  {id:3, number: 5},
  {id:4, number: 4},
  {id:5, number: 3}
]

var charaNumbers = [];
_.each(characters, function(character) {
  console.log(character);
  if(_.any(charaNumbers, function(charaNum) {
    return charaNum.number === character.number; })) {
    console.log("重複あります: characterId=" + character.id);
  }
  charaNumbers.push(character);
})

console.log(charaNumbers);


//・欠番がないかチェック(あればthrow)
//・numberの合計数と最後の番号が同じか(違えばthrow)
var maxNum = _.max(charaNumbers, function (c) {
  return c.number;
});
var minNum = _.min(charaNumbers, function (c) {
  return c.number;
});

console.log("max=" + maxNum.number + ", min=" + minNum.number);

if(maxNum.number !== charaNumbers.length) {
  console.log("最大numとキャラ数が合わない:size=" + charaNumbers.length);
}

if(minNum.number !== 1) {
  console.log("numberが1から始まってない");
}


var bbb = [10, 20, 30];
var aaa = bbb[0] = bbb[0] || [];
console.log('before aaa:' + aaa + ', bbb: ' + bbb[0]);
aaa.push('hello');
console.log('after aaa:' + aaa + ', bbb: ' + bbb[0]);


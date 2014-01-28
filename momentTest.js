var moment = require('moment');

// 今のunixTime
console.log(moment().unix());

// 今の日付
console.log(moment().format("YYYY/MM/DD HH:mm:ss"));

// 来月は何月
console.log(moment().add('months', 1).format("YYYY/MM/DD HH:mm:ss"));

// 15ヶ月後は？
console.log(moment().add('months', 15).format("YYYY/MM/DD HH:mm:ss"));

// 今月末
console.log(moment().endOf('month').format("YYYY/MM/DD HH:mm:ss"));

// 来月末
console.log(moment().add('months', 1).endOf('month').format("YYYY/MM/DD HH:mm:ss"));

// 来月末のunixTime
console.log(moment().add('months', 1).endOf('month').unix());

var unixTime = moment().unix();

// timezone配慮した来月末のunixTime
console.log(moment.unix(unixTime).zone(5).add('months', 1).endOf('month').unix());


var nextMonthUnixTime = moment.unix(unixTime).zone(-540 || 0).add('months', 1).unix();
console.log(nextMonthUnixTime);

var futureMonthUnixTime = moment.unix(unixTime).zone(-540 || 0).add('months', 2).unix();
console.log(futureMonthUnixTime);

var nextExpiredAt = moment.unix(unixTime).zone(-540).add('months', 1).endOf('month').unix();
console.log(nextExpiredAt);


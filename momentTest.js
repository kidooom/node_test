var moment = require('moment');

// 今のunixTime
console.log(moment().unix());

// 今の日付
console.log(moment().format("YYYY/MM/DD HH:mm:ss"));

// 来月は何月
console.log(moment().add('months', 1).format("YYYY/MM/DD HH:mm:ss"));

// 15ヶ月後は？
console.log(moment().add('months', 15).format("YYYY/MM/DD HH:mm:ss"));

// 来月末
console.log(moment().add('months', 1).endOf('month').format("YYYY/MM/DD HH:mm:ss"));

// 来月末のunixTime
console.log(moment().add('months', 1).endOf('month').unix());
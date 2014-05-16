var crypto = require('crypto');

var secretKey = '123456789key';
var text = 'Hello world';

var hash = crypto.createHash('md5');
hash.update(secretKey, 'utf8');
var key = hash.digest();

hash = crypto.createHash('md5');
hash.update(secretKey + 'randomToken');
var ive = hash.digest();

var cipher = crypto.createCipheriv('aes-128-cbc', key, ive);
var crypted = cipher.update(text, 'utf8', 'hex');
crypted += cipher.final('hex');
console.log('暗号結果: ' + crypted);

var decipher = crypto.createDecipheriv('aes-128-cbc', key, ive);
var dec = decipher.update(crypted, 'hex', 'utf8');
dec += decipher.final('utf8');
console.log('復号結果: ' + dec);

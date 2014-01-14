#!/usr/bin/env node

var mymath = exports;

mymath.add = function (a, b){
    return a + b;
}

mymath.multiply = function (a, b){
    return a * b;
}

mymath.absolute = function (a) {
    return (a > 0) ? a : -a;
}

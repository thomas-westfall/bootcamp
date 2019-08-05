var setDifference = require('./set-difference');
var setIntersection = require('./set-intersection');

var set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
var set2 = ["blue", "horses", "dogs", "code", "rain"];

console.log(setDifference(set1,set2));
console.log(setIntersection(set1,set2));
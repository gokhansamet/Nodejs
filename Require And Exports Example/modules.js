// Using module.exports for a single value
const test1 = require("./test-module-1");
const object = new test1();
console.log(object.add(2, 5));

// Using exports for multiple values
const test2 = require("./test-module-2");
console.log(test2.add(2, 5));
console.log(test2.multiply(2, 5));
console.log(test2.divide(5, 2));

// To see cache
const cache = require("./caching");
cache();
cache();
cache();
cache();

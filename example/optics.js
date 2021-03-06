var OPTICS = require('../lib/index.js').OPTICS;

var dataset = [
    [1,1],[0,1],[1,0],
    [10,10],[13,13],[10,13],
    [54,54],[55,55],[89,89],[57,55],
    [20.01, 20.05],[20.09, 20.07],[20.20, 20.15],[20.09, 20.12]
];

var optics = new OPTICS();
var clusters = optics.run(dataset, 5, 2);
console.log(clusters);
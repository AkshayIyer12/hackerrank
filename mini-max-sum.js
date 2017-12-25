process.stdin.resume();
process.stdin.setEncoding('ascii');
var bigInt = require('bignumber.js')

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let sarr = []
    arr = arr.sort((a, b) => a-b)
    let sum = arr.reduce((accum, val) => accum+val,0)
    console.log(sum - Math.max(...arr), sum - Math.min(...arr))

    //console.log(Math.min(...sarr), Math.max(...sarr))
}

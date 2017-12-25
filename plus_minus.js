process.stdin.resume();
process.stdin.setEncoding('ascii');
var bigInt = require
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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let countP = 0,countN = 0, countZ = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) countP++
        if(arr[i] < 0) countN++
        if(arr[i] === 0) countZ++
    }
    console.log(parseFloat(countP/n).toFixed(6))
    console.log(parseFloat(countN/n).toFixed(6))
    console.log(parseFloat(countZ/n).toFixed(6))
}


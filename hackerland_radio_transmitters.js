process.stdin.resume();
process.stdin.setEncoding('ascii');

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    x = readLine().split(' ');
    let obj = {}
    x = x.map(Number)
    x.sort((a,b) => a - b)
    let numOfTransmitters = 0, i = 0
    while(i < n) {
      numOfTransmitters++
      let loc = x[i] + k
      while (i < n && x[i] <= loc) i++
      loc = x[--i] + k
      while (i < n && x[i] <= loc) i++
    }
  console.log(numOfTransmitters)
}

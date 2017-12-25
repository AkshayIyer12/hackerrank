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
const bigFactorial = n => {
  const bigNumber = require('bignumber.js');
  let result = new bigNumber(1);
  for (let i = 1; i <= n; i++) {
    result = result.mul(i);
  }
  return result.toFixed();
}
function main() {
    var n = parseInt(readLine());
    console.log(bigFactorial(n))
}

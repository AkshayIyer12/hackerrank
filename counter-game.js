const bignum = require('bignumber.js')
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
var input_currentline = 0;
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  input_stdin_array = _input.split("\n");
  main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function main () {
  let t = parseInt(readLine())
  for (let i = 0; i < t; i++) {
    let n = new bignum(readLine()).toString(2).split('')
   console.log((n.filter(c => c == '1').length + n.length - 1 - n.lastIndexOf('1')) % 2 ? "Richard" : "Louise");
  }
}

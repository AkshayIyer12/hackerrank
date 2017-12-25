process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function maxXor(l, r) {
  let value = l ^ r, result = 1
  while(value) {
    value = value >> 1
    result = result << 1
  }
  return result - 1
}

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    res = maxXor(_l, _r);
    process.stdout.write(""+res);

});

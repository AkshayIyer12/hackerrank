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
const check = f => g => i => f.charAt(i) !== g.charAt(i)
const compare = f => g => k => f.length + g.length <= k
const dec = f => g => f.length - g
const checkConversion = s => t => k => {
  if (compare(s)(t)(k)) return true
  let i = 0
  for (; i < s.length && t.length; i++) if(check(s)(t)(i)) break
  let minOp = dec(s)(i) + dec(t)(i)
  return k >= minOp && (k - minOp) % 2 === 0
}
function main() {
    var s = readLine();
    var t = readLine();
    var k = parseInt(readLine());
    let c = checkConversion(s)
    let d = c(t)(k) ? 'Yes' : 'No'
    process.stdout.write(""+d+"\n")

}

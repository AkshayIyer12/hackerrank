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
function gcd(a,b) {
  if(a === 0) return b
  return gcd(b%a, a)
}
function twoArray(b) {
  let result = b[0]
  for(let i = 1; i < b.length; i++) {
    result = gcd(b[i], result)
  }
  return result
}
function findlcm(a) {
  let ans = a[0]
  for(let i = 1; i < a.length; i++) {
    ans = (a[i]*ans) / (gcd(a[i], ans))
  }
  return ans
}
function getTotalX(a, b) {
    // Complete this function
  let f = findlcm(a), l = twoArray(b), count = 0
  for(let i = f; i<=l; i+=f) {
    if(l%i === 0) count++
  }
  return count
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}

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

function sockMerchant(n, ar) {
    // Complete this function
  let obj = {}, count = 0
  for(let i = 0; i < n; i++) {
    if (obj[ar[i]] === undefined) obj[ar[i]] = 0
    obj[ar[i]]++
  }
  for (let key in obj) {
    if (obj[key] !== 1 && obj[key]%2 === 0) count += Math.floor(obj[key]/2)
    else if (obj[key] !== 1 && obj[key]%2 === 1) count += Math.floor(obj[key]/2)
  }
  return count
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}

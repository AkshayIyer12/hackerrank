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

function minimumAbsoluteDifference(n, arr) {
    // Complete this function
  let ar = [], diff = Math.abs(arr[0] - arr[1]), sub = 0
  arr.sort((a, b) => a-b)
  for (let i = 0; i < n-1; i++) {
    let sub = Math.abs(arr[i] - arr[i+1])
    if (sub < diff) diff = sub
  }
  return diff
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = minimumAbsoluteDifference(n, arr);
    process.stdout.write("" + result + "\n");

}

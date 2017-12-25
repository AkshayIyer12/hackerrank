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
    var n = parseInt(readLine());
    calories = readLine().split(' ');
    calories = calories.map(Number);
    // your code goes here
    calories.sort((a, b) => a-b)
  let count = 0
  for (let i = n-1, j=0; i >= 0; i--, j++) count += calories[i] * Math.pow(2, j)
  console.log(count)

}

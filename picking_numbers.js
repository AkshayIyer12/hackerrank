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
    let a = readLine().split(' ');
    a = a.map(Number);
    let b = Array.from({length: n+1}, () => 0), max = 0
    for (let i = 0; i < n; i++) b[a[i]]++
    for (let m = 0; m < n - 1; m++) {
      if (b[m]+b[m+1] > max) max = b[m] + b[m+1]
    }
    console.log(max)

}

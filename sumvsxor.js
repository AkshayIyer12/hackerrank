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

function solve(n) {
    if(n === 0) return 1;

    var zeroCount = (n).toString(2).match(/0/gm).length;
    var count = Math.pow(2, zeroCount);

    return count;
}

function main() {
    var n = parseInt(readLine());
    var result = solve(n);
    process.stdout.write("" + result + "\n");

}

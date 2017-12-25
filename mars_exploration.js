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
    var s = readLine();
    let S = s.split('')
    let count = 0
    for(let i = 0; i < S.length; i=i+3) {
        if(S[i] !== 'S')
        count++
        if(S[i+1] !== 'O')
        count++
        if(S[i+2] !== 'S')
        count++
    }
    console.log(count)
}

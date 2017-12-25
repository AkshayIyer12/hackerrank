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
    var s = readLine();
    var k = parseInt(readLine());
    let v = s.split('').map((a) => {
        if(!a.match(/[a-z]/i)) return a
        let uplimit = (a === a.toUpperCase()) ? 90 : 122
        a = parseInt(a.charCodeAt(0)) + k % 26
        return (a > uplimit) ? String.fromCharCode(a-26) : String.fromCharCode(a)
        }).join('')
    console.log(v)

}
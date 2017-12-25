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
    var q = parseInt(readLine());
    let str = 'hackerrank'
    for(var a0 = 0; a0 < q; a0++){
        const s = readLine();
        // your code goes here
        if(s.length < str.length)
            console.log('NO')
        let j = 0
        for(let i = 0; i < s.length; i++) {
            if (j < str.length && s.charAt(i) === str.charAt(j)) {
                j++
            }
        }
        console.log((j === str.length) ? 'YES' : 'NO')
    }
}

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
    let board = ""
    let copy = n
    let copy2 = n
    while(copy !== 0) {
     for(let j = 0; j < copy-1; j++)
       board+=' '
     copy = copy - 1
        for(let k = 0 ; k < copy2-copy ; k++)
     board+="#"
     if(copy>0)
     board+='\n'
    }
    console.log(board)
}

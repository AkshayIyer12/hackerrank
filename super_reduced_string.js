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

function super_reduced_string(s){
    // Complete this function
 for(let i = 0; i < s.length; i++) {
     if(s[i] === s[i+1]) {
       s.splice(i, 2)
       i = -1
     }
 }
    if(s.length === 0)
         return "Empty String"
    return s.join('')
}

function main() {
    var s = readLine().split('');
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}

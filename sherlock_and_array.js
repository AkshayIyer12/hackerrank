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

function solve(a){
    // Complete this function
  let i = 0, j = a.length - 1, sum = 0
  while (i !== j) {
    if (sum >= 0) {
      sum -= a[j]
      j--
    } else {
      sum += a[i]
      i++
    }
  }
  return sum === 0
}

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        var result = solve(a);
        if (result === true) result = 'YES'
        else result = 'NO'
        process.stdout.write(""+result+"\n");
    }

}

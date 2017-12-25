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
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    let map = new Map()
    let i = 0, max = 0
    for (let ch = 97; ch <= 122; ch++) {
      map.set(String.fromCharCode(ch), h[i])
      i++
    }
    for (let j = 0; j < word.length; j++) {
      let val = map.get(word.charAt(j))
      if (val>max) max = val
    }
    console.log(max*word.length)

}

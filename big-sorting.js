process.stdin.resume();
process.stdin.setEncoding('ascii');
let BigNumber = require('bignumber.js');

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
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }
    unsorted.sort((a, b) => {
      if(a.length > b.length) return 1
      if(a.length === b.length) {
        let ac = a.split('')
        let bc = b.split('')
        for (let i = 0; i < a.length; i++) {
          let cna = parseInt(a[i])
          let bna = parseInt(b[i])
          if (cna > bna) return 1
          if (cna < bna) return -1
          else continue
        }
        return 0
      }
      else return -1
    })
    for (let i = 0; i < unsorted.length; i++) {
      console.log(unsorted[i])
    }
    // your code goes here

}

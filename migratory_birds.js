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

function migratoryBirds(n, ar) {
    // Complete this function
  let obj = {}, max = 0, keyed = 0
  for(let i = 0; i < ar.length; i++) {
    if(obj[ar[i]] === undefined) obj[ar[i]] = 1
    if(obj[ar[i]]) obj[ar[i]]++
  }
  let arr = Object.keys(obj).map(key => obj[key])
  let sum = Math.max.apply(null, arr);
  for (let key in obj) {
    if (obj[key] === sum) {
      keyed = key
      break
    }
  }
  return keyed
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}

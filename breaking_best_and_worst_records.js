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

function getRecord(s){
    // Complete this function
  let obj = {
    high : 0,
    low : 0,
    score : []
  }
  let l, h, count1 = 0, count2 = 0
  for(let i = 0; i < s.length; i++) {
    obj.score.push(s[i])
    obj.high = Math.max.apply(null, obj.score)
    if(h !== obj.high) {
      h = obj.high
      count1++
    }
    obj.low = Math.min.apply(null, obj.score)
    if(l !== obj.low) {
      l = obj.low
      count2++
    }
  }
  count1 -= 1
  count2 -= 1
  return [count1, count2]
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}

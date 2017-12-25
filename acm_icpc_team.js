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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var topic = [];
    for(var topic_i = 0; topic_i < n; topic_i++){
       topic[topic_i] = readLine();
      topic[topic_i] = topic[topic_i].split('').map(Number)
    }
    finalCount = 0
    count = 0
    max = 0
    for (let k = 0; k < topic.length; k++) {
      for (let l = k+1; l < topic.length; l++) {
        count = 0
        for(let m = 0; m < topic[k].length; m++) {
          if ((topic[k][m] | topic[l][m]) === 1) count++
          if (count > max) {
            max = count
            finalCount = 0
          }
          if (count === max) finalCount++
        }
      }
    }
  process.stdout.write(""+max+"\n"+finalCount)
}

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
function binarySearch(s, start, end, alice) {
  if (alice < s[end]) return -1
  if (alice >= s[start]) return 0
  if (end-start<=1) return end
  let mid = (start+end) >> 1
  if (s[mid] < alice) return binarySearch(s, start, mid, alice)
  else if (s[mid] === alice) return mid
  else return binarySearch(s, mid, end, alice)
}
function main() {
    let n = parseInt(readLine());
    let scores = readLine().split(' ');
    scores = scores.map(Number);
    let m = parseInt(readLine());
    let alice = readLine().split(' ');
    alice = alice.map(Number);
    // your code goes here
    let rank = new Array(n)
    rank[0] = 1
    for (let i = 1; i < n; i++) {
      if (scores[i] < scores[i-1]) rank[i] = rank[i-1] + 1
      else rank[i] = rank[i-1]
    }
    let start = 0, end = n-1, ind = 0
    for (let i = 0; i < m; i++) {
      ind = binarySearch(scores, start, end, alice[i])
      if (ind === -1) console.log(rank[n-1]+1)
      else {
        end = ind
        console.log(rank[ind])
      }
    }
}

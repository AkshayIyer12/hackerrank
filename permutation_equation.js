process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
  input = input.split('\n')
  let n = Number(input[0])
  let ar = input[1].split(' ').map(Number)
  let p = new Array(n+1)
  for (let i = 1, k = 0; i <= n &&  k < n; i++, k++) {
    p[ar[k]] = i
  }
  for (let i = 1; i <= n; i++) console.log(p[p[i]])
});

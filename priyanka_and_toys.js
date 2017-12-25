function processData(n, ar) {
    //Enter your code here

  ar.sort((a, b) => a-b)
  let cost = 1
  let p = ar[0]
  for (let i = 0; i < n; i++) {
    if(ar[i]>p+4) {
      cost = cost + 1
      p = ar[i]
    }
  }
  console.log(cost)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  let input = _input.split('\n')
  let n = Number(input[0])
  let ar = input[1].split(' ').map(Number)
   processData(n , ar);
});

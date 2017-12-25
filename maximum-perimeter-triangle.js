function processData(ar, n) {
    //Enter your code here
  ar.sort((a,b) => a-b)
  let i = n-3
  while (i>=0 && ar[i]+ar[i+1]<=ar[i+2]) i --
  if (i>=0) console.log(ar[i], ar[i+1], ar[i+2])
  else console.log('-1')
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    input_stdin_array = _input.split("\n");
    let n = Number(input_stdin_array[0])
    let ar = input_stdin_array[1].split(' ').map(Number)
    processData(ar, n)
});

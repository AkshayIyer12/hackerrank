function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let n = Number(input[0])
  for (let i = 0; i < n; i++) {
    let num = Number(input[i+1])
    console.log(~num >>> 0)
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

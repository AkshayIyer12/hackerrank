function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let t = Number(input[0])
  let num = 1
  while (t --> 0) {
    let n = Number(input[num++])
    let arr = input[num++].split(' ').map(Number)
    if (n%2 === 0) console.log(0)
    else {
      let result = 0
      for (let i = 0; i < n; i++) {
        if (i%2===0) result ^= arr[i]
      }
      console.log(result)
    }
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

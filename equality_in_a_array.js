function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let n = Number(input[0])
  let arr = input[1].split(' ').map(Number)
  let brr = new Array(101).fill(0)
  for(let i = 0; i < n; i++) brr[arr[i]]++
  console.log(n-Math.max(...brr))
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

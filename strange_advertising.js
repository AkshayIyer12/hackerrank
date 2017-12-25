function processData(input) {
    //Enter your code here
  let n = Number(input)
  let p = 5, c = 0
  while (n>0) {
    let intd = Math.floor(p/2)
    p = intd * 3
    c = c + intd
    n--
  }
  console.log(c)
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

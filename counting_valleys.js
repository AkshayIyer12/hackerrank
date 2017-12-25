function processData(input) {
    //Enter your code here
  let data = input.split('\n')
  let tSteps = Number(data[0])
  let str = data[1].split('')
  let count = 0, final = 0
  for (let j = 0; j < str.length; j++) {
    if (str[j] === 'D') count--
    else {
      count++
      if (count === 0) final++
    }
  }
  console.log(final)
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

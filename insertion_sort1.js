function processData(input) {
  let lengthData = Number(input.split('\n')[0])
  let arrData = input.split('\n')[1].split(' ')
  let data = arrData.map(a => Number(a))
  let length = data.length
  let i = length - 2
  let e = data[length - 1]
  while(i >= 0 && e <= data[i]) {
      data[i+1] = data[i]
      console.log(data.join(' '))
      i--
  }
  data[i+1] = e
  console.log(data.join(' '))
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

process.stdin.on("end", function () {
  processData(_input);
});
~function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let n = Number(input[0].split(' ')[0])
  let ml = Number(input[0].split(' ')[1])
  let imptSum = 0, unimptSum = 0
  input.splice(0,1)
  let ar = []
  for (let i = 0; i < n; i++) {
    let data = input[i].slice(0,input[i].length).split(' ').map(Number)
    if (data[1] === 1) {
      ar.push(data[0])
      imptSum += data[0]
    }
    else unimptSum += data[0]
  }
  ar.sort((a,b) => a-b)
  let size = ar.length
    if (ml <= size) {
    for(let i = size-ml-1; i>=0; i--) {
      imptSum -= 2 * ar[i]
    }
  }
  console.log(imptSum+unimptSum)
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

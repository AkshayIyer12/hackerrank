function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let t = parseInt(input.splice(0, 1))
  for (let k = 0; k < t; k++) {
    let r = parseInt(input.splice(0, 1))
    let data = input.splice(0, r)
    for(let i = 0; i < r; i++)
      data[i] = data[i].split('').sort((a,b) => a.localeCompare(b)).join('')
    let flag = 0
    for (let l = 0; l < r-1; l++) {
      for (let j = 0; j < r; j++) {
        if (data[l][j] > data[l+1][j]) {
          flag = 1
        }
      }
    }
    flag? console.log('NO') : console.log('YES')
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

function processData(arr, brr, k) {
    //Enter your code here
  let crr = []
  for (let i = 0; i < arr.length; i++) {
    let d = Math.abs((arr[i]-brr[i])/k)
    let floor = Math.floor(d)
    if (floor === d) {
      crr.push(arr[i])
    }
  }
      console.log(crr.length)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  let input = _input.split(' ').map(Number)
  let arr = [], brr = []
  for (let i = input[0]; i <= input[1]; i++) {
    arr.push(i)
    let d = parseInt(i.toString().split('').reverse().join(''), 10)
    brr.push(d)
  }
   processData(arr, brr, input[2]);
});

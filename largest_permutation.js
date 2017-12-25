function processData(n, k, arr) {
    //Enter your code here
  let j = 0
  for(let i = 0; i < n ; i++) {
    if (arr[i]!== n-i && k!== 0) {
      j = i+1
      while (arr[j] !== n-i) {
        j++
      }
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      k--
    }
  }
  for (let i = 0; i < n; i++) process.stdout.write(""+arr[i]+' ')
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  let input = _input.split('\n')
  let n = Number(input[0].split(' ')[0]), k = Number(input[0].split(' ')[1]), ar = input[1].split(' ').map(Number)
   processData(n, k, ar);
});

function processData(n, ar, br) {
    //Enter your code here
  let k = 0
  for (let i = 0, j=0; i < n && j < n;) {
    if (ar[i] === br[j]) {
      k++
      i++
      j++
    }
    else if (ar[i] < br[j]) i++
    else if (br[j] < ar[i]) j++
  }
  if (k === n) k--
  else k++
  console.log(k)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  let input = _input.split('\n')
  let n = Number(input[0])
  let ar = input[1].split(' ').map(Number).sort((a,b) => a-b)
  let br = input[2].split(' ').map(Number).sort((a,b) => a-b)
  processData(n, ar, br);
});

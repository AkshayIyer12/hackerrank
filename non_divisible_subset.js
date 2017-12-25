function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let n = input[0].split(' ')[0]
  let k = input[0].split(' ')[1]
  let brr = input[1].split(' ').map(Number)
  let arr = Array.from({length: k}, () => 0)
  for (let i = 0; i < n; i++) {
    arr[brr[i]%k]++
  }
  let res = 0
  if (k%2 === 0) res++
  res = res+Math.min(arr[0], 1)
  for(let j=1;j <= k/2; j++) {
    if(j !== k-j) res += Math.max(arr[j],arr[k-j])
  }
  console.log(res)
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

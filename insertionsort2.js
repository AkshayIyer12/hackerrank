function processData(input) {
  let chopInput = input.split('\n')
  let size = Number(chopInput[0])
  let data = chopInput[1].split(' ')
  let A = data.map(a => Number(a))
  let length = A.length, key, i, j
  for (i = 1; i < length; i++) {
    key = A[i]
    j = i-1
    while (j>=0 && A[j]>key) {
      A[j+1] = A[j]
      j--
    }
    A[j+1] = key
    console.log(A.join(' '))
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

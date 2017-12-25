function processData(input) {
    //Enter your code here
    let count = 0
    let data = input.split('\n')
    let dataInput = data[1].split(' ')
    let A = dataInput.map(a => Number(a))
    let length = A.length, key, i, j
    for (i = 1; i < length; i++) {
      key = A[i]
      j = i-1
      while (j>=0 && A[j]>key) {
        A[j+1] = A[j]
        j--
       count++
      }
      A[j+1] = key
    }
console.log(count)
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

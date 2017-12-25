function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let n = Number(input[0].split(' ')[0])
  let k = Number(input[0].split(' ')[1])
  let nums = input[1].split(' ').map(Number)
  nums.sort((a,b) => a - b)
  let i=0,j=1,count=0;

    while(j < nums.length) {
        let diff = nums[j] - nums[i];
        if (diff == k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
          if (i === j) j++
        } else if (diff < k) {
            j++;
        }
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

const floor = a => Math.floor(a)
const ceil = a => Math.ceil(a)
const sqrt = a => Math.sqrt(a)
const compose = f => g => x => f(g(x))
function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let t = Number(input[0])
  for (let i = 0; i < t; i++) {
    let arr = input[i+1].split(' ').map(Number)
    let a = compose(floor)(sqrt)(arr[1])
    let b = compose(ceil)(sqrt)(arr[0])
    console.log(a - b + 1)
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

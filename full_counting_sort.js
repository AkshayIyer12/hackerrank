function processData(input) {
  //Enter your code here
  var inputArray = input.split('\n');
  var size = Number(inputArray.splice(0, 1));
  var half = size / 2;
  var pairs = [];
  var table = new Float64Array(100);
  var result = [];

  for (let i = 0; i < inputArray.length; i++) {
    let m = inputArray[i]
    let t = m.split(' ')
    pairs.push({
      int: Number(t[0]),
      str: i < half ? '-' : t[1]
    })
  }

  for (var i = 0; i < pairs.length; i++) {
    table[pairs[i].int]++;
  }

  for (var j = 0; j < 100; j++) {
    if (table[j]) {
      for (let i = 0; i < pairs.length; i++) {
        let p = pairs[i]
        if (p.int == j) {
          result.push(p.str)
        }
      }
    }
  }

  console.log(result.join(' '));
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

function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let t = Number(input.splice(0, 1))
  for (let i = 0; i < t; i++) {
    let cost = Number(input.splice(0,1))
    let size = Number(input.splice(0,1))
    let price = input.splice(0,1)[0].split(' ').map(Number)
   determineFlavors(price,cost)
  }
}
function determineFlavors(prices, maxcost) {
  let map = new Map()
  map.set(prices[0], 1)
  for (let i = 0; i < prices.length; i++) {
    let k = map.get(maxcost - prices[i])
    if (k === undefined) map.set(prices[i], i+1)
    else {
      if(i === 0) {
        console.log(k+' '+(i+2))
        break
      }
      else {
        console.log(k+' '+(i+1))
        break
      }
    }
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

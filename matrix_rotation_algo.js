function processData(input) {
    //Enter your code here
  input = input.split('\n')
  let temp = input[0].split(' ').map(Number)
  let rows = temp[0], cols = temp[1], rot = temp[2]
  let arr = Array.from({length: rows}, () => Array.from({length: cols}, () => 0))
  input.splice(0, 1)
  for (let i = 0; i < input.length; i++) {
    arr[i] = input[i].split(' ').map(Number)
  }
  rows--
  cols--
  let result = Array.from({length: rows+1}, () => Array.from({length: cols+1}, () => 0))
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      let x = r < rows - r ? r : rows - r
      let y = c < cols - c ? c : cols - c
      let min = (x < y) ? x : y
      let maxRow = rows - min
      let maxCol = cols - min
      let param = (maxRow + maxCol) * 2 - min * 4
      let row = r
      let col = c
      for (let i = 0; i < rot%param; i++) {
        if (col === min && row < maxRow) row++
        else if (row === maxRow && col < maxCol) col++
        else if (row > min && col === maxCol) row--
        else if (row === min && col > min) col--
      }
      result[row][col] = arr[r][c]
    }
  }
 for (let i = 0; i <= rows; i++) {
   for (let j = 0; j <= cols; j++) {
     process.stdout.write(""+result[i][j]+" ")
   }
   process.stdout.write(""+"\n")
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

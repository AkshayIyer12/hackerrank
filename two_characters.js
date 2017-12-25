process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function maxLen(n, s){
  let obj = {}
    // Complete this function
  for(let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1
  }
  let foundChar = [], charCombos = []
  for (let j in obj) {
    for(let k = 0; k < foundChar.length; k++) {
      charCombos.push(j+foundChar[k])
    }
    foundChar.push(j)
  }
  let max = 0
  for(let l = 0; l < charCombos.length; l++) {
    let rx = new RegExp('[^'+charCombos[l]+']', 'g')
    let str = s.replace(rx, '')
    let soln = true
    for(let k = 1; k < str.length; k++) {
      if (str[k-1] === str[k]) {
        soln = false
        break
      }
    }
    if(soln===true) {
      if(str.length > max) {
        max = str.length
      }
    }
  }
return max
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");

}

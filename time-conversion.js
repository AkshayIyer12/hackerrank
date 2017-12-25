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

function timeConversion(s) {
    // Complete this function
    let str = s.substr(-2)
    if (str === 'PM') {
      str = s.substr(0, 2)
      if (str < 12) {
        let num = parseInt(str)+12
        str = s.replace(str, num)
       return str.slice(0, -2)
      }
      else {
          return s.slice(0, -2)
      }
    }
    else {
           str = s.substr(0,2)
           if (str < 12)
             return s.slice(0,-2)
           else {
               let num = parseInt(str)
               if(num === 12)
                   str = s.replace(str, '00')
               return str.slice(0, -2)
           }

    }
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}

function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let search = input[0]
    let n = input[1]
    input = input[2].split(' ')
    for(let i = 0; i < n; i++) {
        if(input[i] === search)
            console.log(i)
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

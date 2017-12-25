function processData(input) {
    //Enter your code here
    let data = input.split('\n')[1].split(' ').map(Number)
    let count = new Array(101).join(0).split('').map(Number)
    for(let i = 0; i < data.length; i++) {
        count[data[i]]++
    }
    console.log(count.join(' '))
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

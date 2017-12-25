function processData(input) {
    //Enter your code here
    let data = input.split('\n')[1].split(' ').map(Number)
    let left = []
    let right = []
    let equal = []
    for(let i = 0; i < data.length; i++) {
        if(data[i] < data[0]) {
            left.push(data[i])
        }
        if(data[i] > data[0]) {
            right.push(data[i])
        }
        if(data[i] === data[0]) {
            equal.push(data[i])
        }
    }
    console.log(left.join(' ')+' '+equal.join(' ')+' '+right.join(' '))
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

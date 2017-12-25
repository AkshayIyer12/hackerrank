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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var rQueen_temp = readLine().split(' ');
    var rQueen = parseInt(rQueen_temp[0]);
    var cQueen = parseInt(rQueen_temp[1]);
    let up = n - rQueen
    let down = rQueen - 1
    let left = cQueen - 1
    let right = n - cQueen
    let uld = up < left ? up : left
    let urd = up < right ? up : right
    let dld = down < left ? down : left
    let drd = down < right ? down : right
    const choose = f => g => f < g? f : g
    const absDiff = f => g => Math.abs(f-g) - 1
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        // your code goes here
        if (cObstacle === cQueen) {
          let path = absDiff(rObstacle)(rQueen)
          if (rQueen<rObstacle) up = choose(up)(path)
          else down = choose(down)(path)
        }
        else if (rObstacle === rQueen) {
          let path = absDiff(cObstacle)(cQueen)
          if (cQueen<cObstacle) right = choose(right)(path)
          else left = choose(right)(path)
        }
        else {
          let path = absDiff(cObstacle)(cQueen)
          let path1 = absDiff(rObstacle)(rQueen)
          if (path === path1) {
            if (cQueen<cObstacle && rQueen<rObstacle) urd = choose(urd)(path)
            else if (cQueen>cObstacle && rQueen<rObstacle) uld = choose(uld)(path)
            else if (cQueen<cObstacle && rQueen>rObstacle) drd = choose(drd)(path)
            else dld = choose(dld)(path)
          }
        }
    }
    let total = [up, down, left, right, urd, uld, drd, dld]
    let sum = total.reduce((a, v) => a+v, 0)
    console.log(sum)

}

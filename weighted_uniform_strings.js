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
    var s = readLine()
    const alphabets = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26}
    let scores = new Set()
    let ctr = 1
    for (let i = 0; i < s.length; i++) {
	   let score = alphabets[s.charAt(i)]
	   if (i+1 !== s.length && s[i+1] === s[i]) {
		ctr = ctr + 1
	   }
	   else
		ctr = 1
	   scores.add(score*ctr)
    }
    var n = parseInt(readLine())
    for(var a0 = 0; a0 < n; a0++){
        var x = parseInt(readLine())
        // your code goes here
       if( scores.has(x) === true)
    	console.log('Yes')
       else
    	console.log('No')
    }
}

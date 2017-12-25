process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
   let obj = {}
   input = input.toLowerCase().replace(/\s/g,'').split('').forEach((item) => {
    if (!obj.hasOwnProperty(item))
        obj[item] = true;
  })
   Object.keys(obj).length == 26 ? console.log('pangram') : console.log('not pangram')
});

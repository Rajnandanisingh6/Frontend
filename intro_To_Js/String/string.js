
var str="Hello EveryOne";

let x= str.toLowerCase()
let y=str.toUpperCase()
console.log(x);
console.log(str.replace('o','i'))
console.log(str.replaceAll('o','i'))
console.log(str.split(" "))

let z="abc.png"
console.log(z.split('.')[0] +'jpg')

let money=50;        //backtick support string literal
//var msg='i have money rs' 
var msg=`i have ${ money} rs`
console.log(msg) 
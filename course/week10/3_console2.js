let s = "hello"
let x = "world"
let y = `s=${s} x=${x}` //將值代入後才印出
let z = "s=${s} x=${x}" //直接視為字串

console.log("y=",y) 
console.log("z=",z)

//let value=(function(a,b){return a+b})(1,2)
//console.log(value) => 3

let value = ((a: number, b: number) => {return a+b})(1,2)
console.log(value)
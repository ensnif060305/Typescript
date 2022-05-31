const sentence = (a:number, b:number): void => { 
    if(a>b) console.log('a is greater than b') 
    else console.log('b is greater than a')
}
const value =(a: number, b:number):boolean => a>b
sentence(4, 9)
console.log(value(2,1))
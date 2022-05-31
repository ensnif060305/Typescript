const calcc = (value: number, cb: (number) => void): void => {
    let add = (a, b) => a + b
    function multify(a, b){return a * b}

    let result = multify(add(1,2), value)
    cb(result)
}
calcc(30, (result: number) => console.log(`result is ${result}`))

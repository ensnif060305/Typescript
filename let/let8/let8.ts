interface Ram{
  name: string
  age?: number
}

class Rem implements Ram{
  constructor(public name: string, public age?: number){}
}
let emilia : Ram = new Rem('PACK', 1000000)
console.log(emilia)

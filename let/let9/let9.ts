abstract class Ram{
  abstract name: string  
  constructor(public age?: number){}
}

class Rem extends Ram{
  constructor(public name: string, public age?: number){
    super(age)
  }
}
let emilia : Rem = new Rem('Subaru', 17)
console.log(emilia)
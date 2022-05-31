import Rem from './Rem'
let obj: object = {name: 'Ram'}


let name1 = (<Rem>obj).name
let name2 = (obj as Rem).name
console.log(name1, name2)
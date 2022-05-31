let Rezero: any = {
  nam: 'Rem',
  age: '17years',
  birthday: '2-2',
  want1: 'sky',
  want2: 'swim',
  want3: 'travel'
}
const {nam, age, birthday, ...detail} = Rezero
console.log(detail)
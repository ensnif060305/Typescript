class student{
  name: string
  age: number
  classnumber: number
  constructor(name:string, age:number, classnumber: number){
    this.name = name; this.age = age; this.classnumber = classnumber;
  }
}
const Student: student=new  student('hyeonsuk', 17, 3)
console.log(Student)
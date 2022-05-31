var student = /** @class */ (function () {
    function student(name, age, classnumber) {
        this.name = name;
        this.age = age;
        this.classnumber = classnumber;
    }
    return student;
}());
var Student = new student('hyeonsuk', 17, 3);
console.log(Student);

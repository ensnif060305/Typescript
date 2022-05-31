var ai = { name: 'JACK', age: 32 };
function printMe(me) {
    console.log(me.etc ?
        "".concat(me.name, " ").concat(me.age, " ").concat(me.etc) :
        "".concat(me.name, " ").concat(me.age));
}
printMe(ai);

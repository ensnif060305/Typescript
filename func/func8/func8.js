var sentence = function (a, b) {
    if (a > b)
        console.log('a is greater than b');
    else
        console.log('b is greater than a');
};
var value = function (a, b) { return a > b; };
sentence(4, 9);
console.log(value(2, 1));

var calcc = function (value, cb) {
    var add = function (a, b) { return a + b; };
    function multify(a, b) { return a * b; }
    var result = multify(add(1, 2), value);
    cb(result);
};
calcc(30, function (result) { return console.log("result is ".concat(result)); });

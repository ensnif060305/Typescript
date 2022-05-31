// let Rem = {...{x: 0}, ...{y: 0}}
// console.log(Rem)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var life1 = { age: 17 }, life2 = { name: 'emilia' }, life3 = { name: 'none' }, life4 = { name: 'Reinhardt' };
var deadreturn = __assign(__assign(__assign(__assign({}, life1), life2), life3), life4);
console.log(deadreturn);

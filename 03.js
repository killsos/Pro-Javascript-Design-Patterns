var bar;

(function () {
    var foo = 10;
    var baz = 2;
    bar = function () {
        return foo * baz;
    }
})();

console.log(bar());
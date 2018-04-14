function foo() {
    let a = 10;

    function bar() {
        a *= 2;
        return a;
    }

    return bar;
}

var baz = foo();

console.log(baz())   // 20

console.log(baz())    // 40

console.log(baz())    // 80
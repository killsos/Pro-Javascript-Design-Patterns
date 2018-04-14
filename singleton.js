let Singleton1 = function () {
    return {

    };
}()

console.log(Singleton1)

let Singleton2 = (function () {
    return {

    };
})();

console.log(Singleton2)


let Singleton3 = (function () {
    // private  attribute
    var privateAttribute1 = false;
    var privateAttribute2 = [1, 2, 3];

    // private  method
    function privateMethod1() {

    }

    function privateMethod2() {

    }

    return {
        // public attribute
        publicAttribute1: true,
        
        // public method
        publicMethod1: function () {
            
        }
    };
})();

console.log(Singleton3)
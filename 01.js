Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;  // 实现链式调用
}

var Anim = function () {

}
/**
 * 这里注意Anim是函数对象
 *
 */
Anim.method('start', function () {
    console.log('start')；
})

Anim.method('stop', function () {
    console.log('stop');
})

console.log(Anim.method.toString())
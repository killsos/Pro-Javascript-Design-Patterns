/*
* 自执行匿名函数
* 必须有分号结束
*
* An anonymous function executed immediately
*
* */

// 无参数
(function () {
    var bar = 123;
    console.log(bar);
})();

// 有参数

(function (a, b) {
    var bar = a;
    console.log(b, bar);
})(10, '有参数');

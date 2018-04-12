var Interface = function (name, methods) {
    if(arguments.length != 2) {
        throw new Error('');
    }

    this.name = name;
    this.methods = [];

    for (var i = 0, len = methods.length; i < len; i++) {
        this.methods.push(methods[i])
    }
}

Interface.ensureImplements = function (object) {
    // 检查属性

    // 检查方法

}
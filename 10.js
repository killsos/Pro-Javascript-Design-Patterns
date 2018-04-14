function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}

Author.prototype = new Person();

Author.prototype.constructor = Author;

Author.prototype.getBooks = function () {
    return this.books;
}

// extend值实现原型上继承
function extendA(subClass, superClass) {
    var F = function () {

    }

    F.prototype = superClass.prototype;

    superClass.prototype = new F();

    superClass.prototype.constructor = superClass;
}
// extend值实现原型上继承 属性继承
function extendB(subClass, superClass) {
    var F = function () {

    }

    F.prototype = superClass.prototype;

    superClass.prototype = new F();

    superClass.prototype.constructor = superClass;

    subClass.superclass = superClass.prototype;

    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

// 一个完整的继承
function Author(name, books) {
    Author.superclass.prototype.constructor.call(this, name);
    this.books = books;
}

extend(Author, Person);
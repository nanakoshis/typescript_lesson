var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // classを型として使用できる
    Person.prototype.greeting = function () {
        console.log("Hello! My name is ".concat(this.name));
    };
    return Person;
}());
var person2;
var quill = new Person('quill', 38);
quill.greeting();
var anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
};

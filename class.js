var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // Personを継承したTeacherクラスを拡張するにはコンストラクタ関数を作り、superキーワードを付ける
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    // 同じメソッドを継承先で再定義できる
    // 継承元でprivate修飾子がついているのでageを呼び出すとエラーが出る
    // その場合はprotected修飾子を付けると継承先まではアクセスできるが、パブリックにはアクセスできないようになる
    Teacher.prototype.greeting = function () {
        console.log("Hello! My name is ".concat(this.name, ". I am ").concat(this.age, " years old. I teach ").concat(this.subject));
    };
    return Teacher;
}(Person));
var teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();

class Person {
  constructor(public readonly name: string, protected age: number) {
  }
  // classを型として使用できる
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}

class Teacher extends Person {
  // Personを継承したTeacherクラスを拡張するにはコンストラクタ関数を作り、superキーワードを付ける
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  // 同じメソッドを継承先で再定義できる
  // 継承元でprivate修飾子がついているのでageを呼び出すとエラーが出る
  // その場合はprotected修飾子を付けると継承先まではアクセスできるが、パブリックにはアクセスできないようになる
  greeting(this: Teacher) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
  }
}

const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();
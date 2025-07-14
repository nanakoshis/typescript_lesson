class Person {
  constructor(public readonly name: string, private age: number) {
  }
  // classを型として使用できる
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}
let person2: Person;
const quill = new Person('quill', 38);
quill.greeting();
const anotherQuill = {
  name: 'anotherQuill',
  greeting: quill.greeting
}
// 通常の関数の表現（基本的にこちらで表現した方が良いが、interfaceでも表現できる）
// type addFunc = (num1: number, num2: number) => number;

// interfaceで関数の型を表現
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1+ n2;
}

type Nameable = {
  name: string;
}

// interface
interface Human extends Nameable {
  name: string;
  age: number;
  // greeting: (message: string) => void;
  greeting(message: string): void;
}

const human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  }
}
// Developerクラスから生成されるインスタンスはHumanの型を満たす必要がある
// そのクラスで実装されている内容がimplementsで指定する型とマッチするかをチェックするための機能
class Developer implements Human {
  // Humanで使われている型を記述するとエラーが消える
  constructor(public name: string, public age: number) {
  }
  greeting(message: string): void {
    console.log('Hello!')
  }
}
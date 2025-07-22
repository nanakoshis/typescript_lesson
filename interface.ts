// タイプエイリアス
// type Human = {
//   name: string;
//   age: number;
// }

// interface
interface Human {
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
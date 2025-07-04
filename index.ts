var hello: string = 'hello';
console.log(hello);

// 型注釈
let hasValue: boolean = true;
// 型推論
let hasValue2 = true;

let count: number = 10;
let float: number = 3.14;
let nrgative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let aa = true;

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'jack',
//   age: 21
// }
// console.log(person.name)
// console.log(person.age)

const person: {
  name: string;
} = {
  name: 'John',
};
console.log(person)

// // 型推論 const fruits: string[]
// const fruits = ['Apple', 'Banana', 'Grape']
// // 型注釈
// const fruits: string[] = ['Apple', 'Banana', 'Grape']

// // ユニオン型 (union type) const fruits: (string | number)[]
// const fruits = ['Apple', 'Banana', 'Grape', 1]

// // any[]型
// const fruits: any[] = ['Apple', 'Banana', 'Grape', 1]

// タプル型 配列を厳密に指定
const book: [string, number, boolean] = ['Apple', 1500, false]
// ただし、pushで挿入可能
book.push(10)
// しかし、タプル型に指定していない要素番号にはアクセスできない ここでは0~2まで
console.log(book[2])

// 列挙型
// 明示的に文字列を書かない場合は0から始まる
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  // CoffeeSize型になる
  size: CoffeeSize.TALL
}
  // CoffeeSize型にStringは入れられない
// coffee.size = 'SHORT'
// enumを使うと特定のまとまったデータを入れる事ができる
coffee.size = CoffeeSize.GRANDE

console.log(CoffeeSize.SHORT)

// Union型
// 型指定の時に｜（バーティカルライン）で区切る or演算子みたいな感じ。
let unionType: number | string = 10;
unionType = 'hello'
unionType.toUpperCase()
console.log(unionType.toUpperCase())

// リテラル型 指定した型しか入らない
// TSではconstを使うとリテラル型になる
const apple = 'apple'

// typeエイリアス
// 型を定義する時に使う
type ClothSize = 'S' | 'M' | 'L';
let clothSize1: ClothSize = 'S';
console.log(clothSize1)

// リテラル型を使うとenumのようにある特定の値しか入れられないようにもできる
// リテラル型のユニオンはオブジェクトではなく、例ではただの文字列になる
let clothSize: 'S' | 'M' | 'L' = 'S';

// enum型よりシンプルに描けるのでリテラル型のユニオンはおすすめ
const cloth: {
  color: string;
  size: 'S' | 'M' | 'L'
} = {
  color: 'red',
  size: 'L'
}

// 関数に型を付ける
// function add(num1, num2) {
//   return num1 + num2
// }

// // 引数の型を指定
// function add(num1: number, num2: number) {
//   return num1 + num2
// }
// 'helloはString型なのでエラーになる
// add('hello', 10)

// 戻り値の型を指定
function add(num1: number, num2: number): number {
  return num1 + num2
}
// 基本的に戻り値の型を指定しなくても良い＝型推論してくれるため

// Dartで書いた場合
// int add(int num1, int num2) {
//   return num1 + num2;
// }

// // void型
// function sayHello(): void {
//   console.log('Hello!');
// }
// // undefinedで良いのでは？→undefinedは使えない
// // returnの時はOKだが基本的にundefinedを使わなくて良い
// function sayHello1(): undefined {
//   console.log('Hello!');
//   return;
// }

// const anotherAdd: (n1: number, n2: number) => number = add;

// コールバック関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num *2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

// データの型のチェック
28 satisfies number;

// 何も返していないエラー
function error(massage: string): never {
  throw new Error(massage);
}
console.log(error('This is an error'));

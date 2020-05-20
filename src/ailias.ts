export {};

// 先頭は大文字
type Mojiretsu = string;

const foo: string = "Hello";
const fooMoji: Mojiretsu = "Hello";

const ex = {
  name: "MM",
  age: 32,
};

type Profile = {
  name: string;
  age: number;
};

const ex2: Profile = {
  name: "MM",
  age: 32,
};

//typeof でやる方がオブジェクトのプロパティ名が変わっても自動で変更されるので良い
type Pr2 = typeof ex;

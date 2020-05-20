export {};

type ObjectType = { name: string; age: number };

// インターフェース(単独でのノテーションができる) objectに型をつけるやり方
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "MM",
  age: 32,
};

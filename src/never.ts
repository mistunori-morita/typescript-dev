export {};

// 呼び元に戻ってこない neverだけが戻ってこない（例外を発生させている）
function error(message: string): never {
  throw new Error(`${message} エラー出ています`);
}

// エラーハンドリングでわざと表示

try {
  let result = error("test");
  console.log(result);
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined; //or null でもNG 上の呼び元に戻ってこないものはOK
let bar: never = error("Only Error");

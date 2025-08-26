export interface Argment {
  argName: string; // 一時領域の何処に書き込むか
  functionName: string; // 呼び出す関数。ローカル変数はlocalという関数を使うし、リテラルはliteralという関数を使う

  type: "string" | "number";
  arg: {};
}

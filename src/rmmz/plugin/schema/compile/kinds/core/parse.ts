export interface PluginGrammarKeyword {
  // ブロックの開始を示すキーワード。次のブロック開始が来るまで保持される
  blockBegin: string[];
  // ブロック内に出てくるキーワード
  keywords: string[];
  // typeとして使える文字列
  types: string[];
}

const tokenize = (text: string): string[] => {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};

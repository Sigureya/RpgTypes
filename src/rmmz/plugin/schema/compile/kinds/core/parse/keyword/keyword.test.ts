import { test, expect } from "vitest";
import {
  KEYWORD_ARG,
  KEYWORD_AUTHOR,
  KEYWORD_BASE,
  KEYWORD_COMMAND,
  KEYWORD_DEFAULT,
  KEYWORD_DESC,
  KEYWORD_DECIMALS,
  KEYWORD_DIR,
  KEYWORD_HELP,
  KEYWORD_MAX,
  KEYWORD_MIN,
  KEYWORD_OFF,
  KEYWORD_ON,
  KEYWORD_OPTION,
  KEYWORD_ORDERAFTER,
  KEYWORD_ORDERBEFORE,
  KEYWORD_TYPE,
  KEYWORD_PARENT,
  KEYWORD_PLUGINDESC,
  KEYWORD_TEXT,
  KEYWORD_TARGET,
  KEYWORD_VALUE,
} from "./constants";
const keywords = [
  KEYWORD_ARG,
  KEYWORD_AUTHOR,
  KEYWORD_BASE,
  KEYWORD_COMMAND,
  KEYWORD_DEFAULT,
  KEYWORD_DESC,
  KEYWORD_DECIMALS,
  KEYWORD_DIR,
  KEYWORD_HELP,
  KEYWORD_MAX,
  KEYWORD_MIN,
  KEYWORD_OFF,
  KEYWORD_ON,
  KEYWORD_OPTION,
  KEYWORD_ORDERAFTER,
  KEYWORD_ORDERBEFORE,
  KEYWORD_TYPE,
  KEYWORD_PARENT,
  KEYWORD_PLUGINDESC,
  KEYWORD_TEXT,
  KEYWORD_TARGET,
  KEYWORD_VALUE,
];

// このテストは、字句解析(tokenize)の正規表現でキーワードの最大長を11文字に制限していることに対応しています。
// もしキーワード定数の中に12文字以上のものが追加された場合、tokenizeで正しく認識できなくなるため、
// ここで最大長が11であることを保証します。
// 正規表現: /^@([a-zA-Z][a-zA-Z0-9_]{2,11})\s+(.{0,10000})$/ の {2,11} に対応
test("All keywords are 11 characters or less for tokenizer compatibility", () => {
  expect(Math.max(...keywords.map((k) => k.length))).toBe(11);
});

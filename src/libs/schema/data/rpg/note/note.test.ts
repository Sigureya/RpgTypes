import { describe, test, expect, vi } from "vitest";
import {
  createNoteEntity,
  makeRegex,
  readNote,
  replaceNote,
  readNoteObject,
} from "./note";

// テスト用のデータ
const exampleNoteTokyo = "<code:13><name:tokyo>";
const exampleNoteSaitama = "<code:11><name:saitama>";

describe("createNoteEntity", () => {
  describe("正常系", () => {
    test("指定されたキーと値で文字列を生成する", () => {
      const result = createNoteEntity("key", "value");
      expect(result).toBe("<key:value>");
    });
  });
});

describe("makeRegex", () => {
  describe("正常系", () => {
    test("正規表現オブジェクトを生成する", () => {
      const regex = makeRegex();
      expect(regex).toBeInstanceOf(RegExp);
    });
  });
});

describe("readNoteObject", () => {
  describe("正常系", () => {
    test("note文字列を解析し、キーと値のペアを取得する", () => {
      const result = readNoteObject(
        { note: exampleNoteTokyo },
        (key, value) => [key, value]
      );
      expect(result).toEqual([
        ["code", "13"],
        ["name", "tokyo"],
      ]);
    });

    test("mockのfnを使用してカスタム処理を行う", () => {
      const mockFn = vi.fn((key: string, value: string) => {
        return { key, value };
      });
      const mockData = { note: exampleNoteTokyo };
      const result = readNoteObject(mockData, mockFn);
      expect(result).toEqual([
        { key: "code", value: "13" },
        { key: "name", value: "tokyo" },
      ]);

      expect(mockFn).toBeCalledTimes(2);
      expect(mockFn.mock.calls[0]).toEqual(["code", "13", mockData]);
      expect(mockFn.mock.calls[1]).toEqual(["name", "tokyo", mockData]);
    });

    test("空文字列を渡しても結果が空配列になる", () => {
      const mockFn = vi.fn((key: string, value: string) => {
        return { key, value };
      });
      const result = readNoteObject({ note: "" }, mockFn);
      expect(result).toEqual([]);
      expect(mockFn).not.toBeCalled();
    });

    test("タグがない場合は空配列になる", () => {
      const result = readNoteObject({ note: "test" }, (key, value) => [
        key,
        value,
      ]);
      expect(result).toEqual([]);
    });
  });
});

describe("readNote", () => {
  describe("正常系", () => {
    test("note文字列を解析し、キーと値のペアを取得する", () => {
      const result = readNote(exampleNoteTokyo);
      expect(result).toEqual([
        ["code", "13"],
        ["name", "tokyo"],
      ]);

      const result2 = readNote(exampleNoteSaitama);
      expect(result2).toEqual([
        ["code", "11"],
        ["name", "saitama"],
      ]);
    });
    test("不完全なタグが混在している場合、正常な部分だけを読み取る", () => {
      const result = readNote("<code:13><name:tok");
      expect(result).toEqual([["code", "13"]]);
    });

    test("空文字列を渡しても結果が空配列になる", () => {
      const result = readNote("");
      expect(result).toEqual([]);
    });

    test("タグがない場合は空配列になる", () => {
      const result = readNote("test");
      expect(result).toEqual([]);
    });

    describe("異常系", () => {
      test("不完全なタグを含む文字列の場合は無視する", () => {});
      const result = readNote("<name");
      expect(result).toEqual([]);
    });
  });
});

describe("replaceNote", () => {
  const mockDictionary = (key: string, value: string): string => {
    if (key === "name") {
      return value.toUpperCase();
    }
    // それ以外はそのまま返す
    return value;
  };

  describe("正常系", () => {
    test("辞書関数を使用して値を置き換える", () => {
      const result = replaceNote(exampleNoteTokyo, mockDictionary);
      expect(result).toBe("<code:13><name:TOKYO>");
    });

    test("空文字列でもエラーにならない", () => {
      const result = replaceNote("", mockDictionary);
      expect(result).toBe("");
    });
  });

  //   describe("異常系", () => {
  //     it("辞書関数が不正でもエラーをスローしない", () => {
  //       const result = replaceNote(exampleNoteTokyo, () => {
  //         throw new Error("辞書関数のエラー");
  //       });
  //       expect(result).toBe(exampleNoteTokyo);
  //     });
  //   });
});

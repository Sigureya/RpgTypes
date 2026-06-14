import { describe, test, expect } from "vitest";
import { isCtrlCharOnly } from "./controlChars";

describe("isCtrlCharOnly", () => {
  test("制御文字のみの文字列を正しく識別する", () => {
    expect("\\N[1]").toSatisfy(isCtrlCharOnly);
    expect("\\V[20]").toSatisfy(isCtrlCharOnly);
    expect("\\n[300]").toSatisfy(isCtrlCharOnly);
    expect("\\v[400]").toSatisfy(isCtrlCharOnly);
  });
  test("前後の空白があっても良い感じに判定する", () => {
    expect("  \\N[1]  ").toSatisfy(isCtrlCharOnly);
    expect("\\N[1]  ").toSatisfy(isCtrlCharOnly);
    expect("  \\N[1]").toSatisfy(isCtrlCharOnly);

    expect("  \\N[1]  ").toSatisfy(isCtrlCharOnly);
    expect("  \\V[20]  ").toSatisfy(isCtrlCharOnly);
    expect("  \\n[300]  ").toSatisfy(isCtrlCharOnly);
    expect("  \\v[400]  ").toSatisfy(isCtrlCharOnly);
  });
});

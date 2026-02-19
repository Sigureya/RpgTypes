import { describe, test, expect } from "vitest";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/libs/eventCommand";
import {
  makeCommandScriptHeader,
  makeCommandScriptBody,
  makeCommandScriptArray,
} from "./make";
import type { Command_ScriptBody, Command_ScriptHeader } from "./types";

describe("makeCommentScriptHeader", () => {
  test("should create a Command2_CommentHeader with the correct structure", () => {
    const script = "Header script";
    const indent = 2;
    const result = makeCommandScriptHeader(script, indent);

    const expected: Command_ScriptHeader = {
      code: SCRIPT_EVAL,
      indent,
      parameters: [script],
    };
    expect(result).toEqual(expected);
  });

  test("should default indent to 0 if not provided", () => {
    const script = "Header script";
    const result = makeCommandScriptHeader(script);

    expect(result.indent).toBe(0);
  });
});

describe("makeCommentScriptBody", () => {
  test("should create a Command2_CommentBody with the correct structure", () => {
    const script = "Body script";
    const indent = 3;
    const result = makeCommandScriptBody(script, indent);

    const expected: Command_ScriptBody = {
      code: SCRIPT_EVAL_BODY,
      indent,
      parameters: [script],
    };
    expect(result).toEqual(expected);
  });

  test("should default indent to 0 if not provided", () => {
    const script = "Body script";
    const result = makeCommandScriptBody(script);

    expect(result.indent).toBe(0);
  });
});

describe("makeCommandScriptArray", () => {
  test("should create a single Command2_CommentHeader when given one script line", () => {
    const scripts = ["Single script"];
    const indent = 1;
    const result = makeCommandScriptArray(scripts, indent);

    expect(result).toEqual([
      {
        code: SCRIPT_EVAL,
        indent,
        parameters: ["Single script"],
      },
    ]);
  });

  test("should create a Command2_CommentHeader and Command2_CommentBody for multiple script lines", () => {
    const scripts = ["Header script", "Body script"];
    const indent = 2;
    const result = makeCommandScriptArray(scripts, indent);

    expect(result).toEqual([
      {
        code: SCRIPT_EVAL,
        indent,
        parameters: ["Header script"],
      },
      {
        code: SCRIPT_EVAL_BODY,
        indent,
        parameters: ["Body script"],
      },
    ]);
  });

  test("should return an empty array when given no script lines", () => {
    const scripts: string[] = [];
    const result = makeCommandScriptArray(scripts);

    expect(result).toEqual([]);
  });

  test("should handle script lines with varying indentation levels", () => {
    const scripts = ["Header script", "Body script"];
    const indent = 4;
    const result = makeCommandScriptArray(scripts, indent);

    expect(result[0].indent).toBe(4);
    expect(result[1].indent).toBe(4);
  });
});

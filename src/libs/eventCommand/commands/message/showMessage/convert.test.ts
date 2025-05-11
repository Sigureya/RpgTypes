import { describe, test, expect } from "vitest";
import { CommandShowMessage } from "./convert";
import type { ParamArray_ShowMessage, ParamObject_ShowMessage } from "./types";

describe("ShowMessageConverter", () => {
  test("fromArray", () => {
    const arrayParam: ParamArray_ShowMessage = ["message", 2, 3, 4, "speaker"];
    const result: ParamObject_ShowMessage =
      CommandShowMessage.fromArray(arrayParam);
    expect(result).toEqual({
      facename: "message",
      faceIndex: 2,
      background: 3,
      positionType: 4,
      speakerName: "speaker",
    });
  });
  test("toArray", () => {
    const objectParam: ParamObject_ShowMessage = {
      facename: "message",
      faceIndex: 2,
      background: 3,
      positionType: 4,
      speakerName: "speaker",
    };
    const result: ParamArray_ShowMessage =
      CommandShowMessage.toArray(objectParam);
    expect(result).toEqual(["message", 2, 3, 4, "speaker"]);
  });
});

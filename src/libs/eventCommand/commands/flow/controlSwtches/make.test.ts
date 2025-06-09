import { describe, test, expect } from "vitest";
import {
  fromArrayControlSwitches,
  makeCommandControlSwitches,
  toArrayControlSwitches,
} from "./make";
import type {
  ParamArray_ControlSwitches,
  Paramobject_ControlSwitches,
} from "./types";
import type { Command_ControlSwitches } from "./types";

describe("", () => {
  test("fromArray", () => {
    const arrayParam: ParamArray_ControlSwitches = [1, 3, 0];
    const result: Paramobject_ControlSwitches =
      fromArrayControlSwitches(arrayParam);
    expect(result).toEqual<Paramobject_ControlSwitches>({
      min: 1,
      max: 3,
      value: 0,
    });
  });

  test("toArray", () => {
    const objectParam: Paramobject_ControlSwitches = {
      min: 1,
      max: 3,
      value: 0,
    };
    const result: ParamArray_ControlSwitches =
      toArrayControlSwitches(objectParam);
    expect(result).toEqual<ParamArray_ControlSwitches>([1, 3, 0]);
  });
  test("makeCommand", () => {
    const objectParam: Paramobject_ControlSwitches = {
      min: 1,
      max: 3,
      value: 0,
    };
    const result: Command_ControlSwitches = makeCommandControlSwitches(
      objectParam,
      2
    );
    expect(result).toEqual<Command_ControlSwitches>({
      code: 121,
      indent: 2,
      parameters: [1, 3, 0],
    });
  });
});

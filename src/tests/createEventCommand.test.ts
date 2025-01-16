import { createEventCommand } from "./createEventCommand";
import type { EventCode, EventCommandTypes } from "../";
import { describe, expect, it } from "vitest";
describe("createEventCommand", () => {
  it("should create a SHOW_MESSAGE command", () => {
    const code: EventCode = 101;
    const params: EventCommandTypes["SHOW_MESSAGE"]["parameters"] = [
      "HeroFace",
      1,
      0,
      2,
      "Hero",
    ];
    const indent = 2;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 101,
      parameters: params,
      indent,
    });
  });

  it("should create a CONTROL_SWITCHES command", () => {
    const code: EventCommandTypes["CONTROL_SWITCHES"]["code"] = 121;
    const params: EventCommandTypes["CONTROL_SWITCHES"]["parameters"] = [
      1, 10, 1,
    ];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 121,
      parameters: params,
      indent,
    });
  });

  it("should create a SHOW_SCROLLING_TEXT command", () => {
    const code: EventCode = 105;
    const params: EventCommandTypes["SHOW_SCROLLING_TEXT"]["parameters"] = [
      4,
      true,
    ];
    const indent = 1;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 105,
      parameters: params,
      indent,
    });
  });

  it("should create a CHANGE_GOLD command", () => {
    const code: EventCommandTypes["CHANGE_GOLD"]["code"] = 125;
    const params: EventCommandTypes["CHANGE_GOLD"]["parameters"] = [0, 0, 100];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 125,
      parameters: params,
      indent,
    });
  });

  it("should create a PLUGIN_COMMAND_MZ command", () => {
    const code: EventCommandTypes["PLUGIN_COMMAND_MZ"]["code"] = 357;
    const params: EventCommandTypes["PLUGIN_COMMAND_MZ"]["parameters"] = [
      "CustomPlugin",
      "CustomCommand",
      "CustomData",
      { option1: "value1", option2: "value2" },
    ];
    const indent = 3;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 357,
      parameters: params,
      indent,
    });
  });
});

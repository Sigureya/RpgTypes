import { createEventCommand } from "./createEventCommand";
import type { EventCode, EventCommandTypes } from "../";
import { describe, expect, it } from "vitest";
describe("createEventCommand", () => {
  it("should create a SHOW_MESSAGE command", () => {
    const code: EventCode = "SHOW_MESSAGE";
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
      code: "SHOW_MESSAGE",
      parameters: params,
      indent,
    });
  });

  it("should create a CONTROL_SWITCHES command", () => {
    const code: EventCode = "CONTROL_SWITCHES";
    const params: EventCommandTypes["CONTROL_SWITCHES"]["parameters"] = [
      1,
      10,
      "ON",
    ];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: "CONTROL_SWITCHES",
      parameters: params,
      indent,
    });
  });

  it("should create a SHOW_SCROLLING_TEXT command", () => {
    const code: EventCode = "SHOW_SCROLLING_TEXT";
    const params: EventCommandTypes["SHOW_SCROLLING_TEXT"]["parameters"] = [
      4,
      true,
    ];
    const indent = 1;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: "SHOW_SCROLLING_TEXT",
      parameters: params,
      indent,
    });
  });

  it("should create a CHANGE_GOLD command", () => {
    const code: EventCode = "CHANGE_GOLD";
    const params: EventCommandTypes["CHANGE_GOLD"]["parameters"] = [
      "ADD",
      0,
      100,
    ];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: "CHANGE_GOLD",
      parameters: params,
      indent,
    });
  });

  it("should create a PLUGIN_COMMAND_MZ command", () => {
    const code: EventCode = "PLUGIN_COMMAND_MZ";
    const params: EventCommandTypes["PLUGIN_COMMAND_MZ"]["parameters"] = [
      "CustomPlugin",
      "CustomCommand",
      "CustomData",
      { option1: "value1", option2: "value2" },
    ];
    const indent = 3;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: "PLUGIN_COMMAND_MZ",
      parameters: params,
      indent,
    });
  });
});

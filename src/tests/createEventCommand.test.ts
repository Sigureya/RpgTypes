import { createEventCommand, showMessage } from "./createEventCommand";
import type { EventCode, EventCommand, EventCommandTypes } from "../";
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

    const result = createEventCommand<101>(code, params, indent);

    expect(result).toEqual({
      code: 101,
      parameters: params,
      indent,
    });
  });

  it("should create a CONTROL_SWITCHES command", () => {
    const code: EventCode = 121;
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

  it("should create a TRANSFER_PLAYER command", () => {
    const code: EventCommandTypes["TRANSFER_PLAYER"]["code"] = 201;
    const params: EventCommandTypes["TRANSFER_PLAYER"]["parameters"] = [
      0, 0, 0, 0, 2, 0,
    ];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 201,
      parameters: params,
      indent,
    });
  });

  it("should create a BATTLE_PROCESSING command", () => {
    const code: EventCommandTypes["BATTLE_PROCESSING"]["code"] = 301;
    const params: EventCommandTypes["BATTLE_PROCESSING"]["parameters"] = [
      0,
      7,
      false,
      false,
    ];
    const indent = 1;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 301,
      parameters: params,
      indent,
    });
  });

  it("should create a CHANGE_PARTY_MEMBER command", () => {
    const code: EventCommandTypes["CHANGE_PARTY_MEMBER"]["code"] = 129;
    const params: EventCommandTypes["CHANGE_PARTY_MEMBER"]["parameters"] = [
      1,
      0,
      false,
    ];
    const indent = 0;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 129,
      parameters: params,
      indent,
    });
  });

  it("should create a SET_EVENT_LOCATION command", () => {
    const code: EventCommandTypes["SET_EVENT_LOCATION"]["code"] = 203;
    const params: EventCommandTypes["SET_EVENT_LOCATION"]["parameters"] = [];
    const indent = 2;

    const result = createEventCommand(code, params, indent);

    expect(result).toEqual({
      code: 203,
      parameters: params,
      indent,
    });
  });
});
describe("createEventCommand", () => {
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
describe("", () => {
  it("showMessage", () => {
    const command = createEventCommand(101, ["HeroFace", 1, 0, 2, "Hero"], 2);
    expect(showMessage(command)).toBe(101);
  });
});

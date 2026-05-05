import { test, describe, expect, vi } from "vitest";
import { SHOW_CHOICES, PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import { convertCommandInfo } from "./conv";
import type {
  MessageCommandParameter,
  ExtractedCommandItem,
  TextCommandParameter,
  TextPluginCommandParameter,
} from "./types";

describe("convertCommandInfo", () => {
  test("message command", () => {
    const comandNameFn = vi.fn(() => "msg");
    const commandUUIDFn = vi.fn(() => "uuid-1234");
    const messageCommand: MessageCommandParameter = {
      code: 401,
      value: "Hello World",
      speaker: "Hero",
      paramIndex: 0,
    };
    const result = convertCommandInfo(
      messageCommand,
      42,
      "CommmonEvent.json",
      comandNameFn,
      commandUUIDFn,
      ["eventName"],
    );
    const expected: ExtractedCommandItem<string> = {
      otherData: ["eventName"],
      uuid: "uuid-1234",
      kind: "msg",
      baseText: "Hello World",
      filename: "CommmonEvent.json",
      id: 42,
      dataKey: "code:401",
      speaker: "Hero",
    };
    expect(result).toEqual(expected);
    expect(comandNameFn).toHaveBeenCalledWith(messageCommand);
    expect(commandUUIDFn).toHaveBeenCalledWith(messageCommand.value);
  });

  test("normal command", () => {
    const comandNameFn = vi.fn(() => "");
    const commandUUIDFn = vi.fn(() => "uuid-1234");
    const messageCommand: TextCommandParameter = {
      code: SHOW_CHOICES,
      paramIndex: 0,
      value: "Base Text",
    };
    const expected: ExtractedCommandItem<string> = {
      otherData: ["other"],
      uuid: "uuid-1234",
      kind: "",
      baseText: "Base Text",
      filename: "file001",
      speaker: "",
      id: 99,
      dataKey: "code:102",
    };
    const result = convertCommandInfo(
      messageCommand,
      99,
      "file001",
      comandNameFn,
      commandUUIDFn,
      ["other"],
    );
    expect(result).toEqual(expected);
  });

  test("plugin command", () => {
    const comandNameFn = vi.fn(() => "");

    const pluginCommand: TextPluginCommandParameter = {
      code: PLUGIN_COMMAND_MZ,
      value: "baseText",
      commandName: "MyCommand",
      argTitle: "MyArg",
      argName: "arg",
      paramIndex: 3,
      pluginName: "MyPlugin",
    };
    const expected: ExtractedCommandItem<string> = {
      otherData: ["MyPlugin", "other"],
      baseText: "baseText",
      filename: "file001",
      id: 123,
      kind: "MyCommand.MyArg",
      uuid: "uuid",
      dataKey: `code:${PLUGIN_COMMAND_MZ}-arg`,
    };
    const result = convertCommandInfo(
      pluginCommand,
      123,
      "file001",
      comandNameFn,
      () => "uuid",
      ["other"],
    );
    expect(result).toEqual(expected);
    expect(comandNameFn).not.toHaveBeenCalled();
  });
});

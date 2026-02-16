import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_PluginCommandMZ,
  Command_ScriptBody,
  Command_ScriptHeader,
  Data_CommonEvent,
  EventCommand,
} from "@RpgTypes/rmmz";
import {
  makeBattleEventPage,
  makeCommandPluginCommandMZ,
  makeCommandScriptBody,
  makeCommandScriptHeader,
  makeTroopData,
} from "@RpgTypes/rmmz";
import type { ReplaceEventTextHandlers } from "./replace";
import {
  replaceCommonEventData,
  replaceTroopData,
  replaceEventCommandTexts,
} from "./replace";

const MOCK_NEW_TEXT = "MOCK_NEW_TEXT";

const createReplaceHandlers = (): MockedObject<ReplaceEventTextHandlers> => ({
  pluginCommand: vi.fn((c: Command_PluginCommandMZ) => c),
  scriptCommand: vi.fn((c) => c),
  replaceText: vi.fn<ReplaceEventTextHandlers["replaceText"]>(
    () => MOCK_NEW_TEXT,
  ),
});

describe("replaceTroopTexts", () => {
  test("replaces troop name and event command texts", () => {
    const troopData = makeTroopData<EventCommand>({
      name: "Troop Name",
      members: [{ enemyId: 1, x: 0, y: 0, hidden: false }],
      id: 99,
      pages: [makeBattleEventPage({})],
    });
    const handlers = createReplaceHandlers();
    const result = replaceTroopData(troopData, handlers);
    expect(result).toEqual(troopData);
    expect(handlers.pluginCommand).not.toHaveBeenCalled();
    expect(handlers.scriptCommand).not.toHaveBeenCalled();
    expect(handlers.replaceText).not.toHaveBeenCalled();
  });
});

describe("replaceCommonEventData", () => {
  test("", () => {
    const commonEvent: Data_CommonEvent = {
      id: 1,
      name: "Common Event",
      trigger: 0,
      switchId: 0,
      list: [],
    };
    const handlers = createReplaceHandlers();
    const result = replaceCommonEventData(commonEvent, handlers);
    expect(result).toEqual(commonEvent);
    expect(handlers.pluginCommand).not.toHaveBeenCalled();
    expect(handlers.scriptCommand).not.toHaveBeenCalled();
    expect(handlers.replaceText).not.toHaveBeenCalled();
  });
});

describe("replaceEventCommandTexts", () => {
  test("replaces text in event commands", () => {
    const commands: Command_PluginCommandMZ = makeCommandPluginCommandMZ({
      args: {},
      pluginName: "TestPlugin",
      commandName: "TestCommand",
    });
    const handlers = createReplaceHandlers();

    const result = replaceEventCommandTexts([commands], handlers);
    expect(result).toEqual([commands]);
    expect(handlers.pluginCommand).toHaveBeenCalledWith(commands);
    expect(handlers.pluginCommand).toHaveBeenCalledOnce();
    expect(handlers.scriptCommand).not.toHaveBeenCalled();
    expect(handlers.replaceText).not.toHaveBeenCalled();
  });
  test("script", () => {
    const command: Command_ScriptHeader = makeCommandScriptHeader("script");
    const handlers = createReplaceHandlers();
    const result = replaceEventCommandTexts([command], handlers);
    expect(result).toEqual([command]);
    expect(handlers.pluginCommand).not.toHaveBeenCalled();
    expect(handlers.scriptCommand).toHaveBeenCalledWith(command);
    expect(handlers.scriptCommand).toHaveBeenCalledOnce();
    expect(handlers.replaceText).not.toHaveBeenCalled();
  });
  test("merges script header and body", () => {
    const head: Command_ScriptHeader = makeCommandScriptHeader("script");
    const body: Command_ScriptBody = makeCommandScriptBody("body");
    const marged: Command_ScriptHeader = makeCommandScriptHeader(
      ["script", "body"].join("\n"),
    );

    const handlers = createReplaceHandlers();
    const result = replaceEventCommandTexts([head, body], handlers);
    expect(result).toEqual([marged]);
    expect(handlers.pluginCommand).not.toHaveBeenCalled();
    expect(handlers.scriptCommand).toHaveBeenCalledWith(marged);
    expect(handlers.scriptCommand).toHaveBeenCalledOnce();
    expect(handlers.replaceText).not.toHaveBeenCalled();
  });
});

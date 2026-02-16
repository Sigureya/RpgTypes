import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_PluginCommandMZ,
  EventCommand,
  NormalizedEventCommand,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";
import {
  makeBattleEventPage,
  makeTroopData,
  makeTroopEventConditions,
} from "@RpgTypes/rmmz";
import { replaceNoteTextByMap } from "./core/replace/text";
import type { ReplaceEventTextHandlers } from "./replace";
import { replaceTroopData, replaceTroopTexts } from "./replace";

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

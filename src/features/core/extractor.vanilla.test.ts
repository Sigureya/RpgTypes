import { test, expect, describe, vi } from "vitest";
import type { Data_CommonEvent, Data_Map, EventCommand } from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeMapDataFromSingleEvent,
} from "@RpgTypes/rmmz";
import type {
  ExtractedCommonEventText,
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./extract/text/eventCommand";
import { extractCommonEventTexts, extractMapText } from "./extractEventText";
import { createTextDataExtractorFromSchemas } from "./extractor";

const mockCommands: EventCommand[] = [
  makeCommandShowMessage({ facename: "", speakerName: "bob" }),
  makeCommandShowMessageBody("testMessage"),
];

const extractor = createTextDataExtractorFromSchemas([]);

describe("GameDataExtractor", () => {
  const mockCommonEvents: Data_CommonEvent = {
    id: 1,
    name: "testCommonEvent",
    list: mockCommands,
    switchId: 0,
    trigger: 0,
  };
  test("", () => {
    const mockFn = vi.fn((): PluginCommandMzParameter[] => []);
    extractCommonEventTexts(mockCommonEvents, mockFn);
    expect(mockFn).not.toBeCalled();
  });
  test("returns the same result as extractCommonEventTexts with pluginCommandTextExtractor that returns empty array", () => {
    const expected: ExtractedCommonEventText = {
      eventId: 1,
      commands: [
        {
          code: 401,
          paramIndex: 0,
          value: "testMessage",
          speaker: "bob",
        },
      ],
    };
    const result = extractor.extractCommonEventText(mockCommonEvents);
    expect(result).toEqual(expected);
  });
});
describe("extractMapTexts", () => {
  const mockMap: Readonly<Data_Map> = Object.freeze<Data_Map>(
    makeMapDataFromSingleEvent(mockCommands),
  );
  test("does not call pluginCommandTextExtractor when there are no plugin commands", () => {
    const mockFn = vi.fn((): PluginCommandMzParameter[] => []);
    extractMapText(mockMap, mockFn);
    expect(mockFn).not.toBeCalled();
  });
  test("returns the same result as extractMapText with pluginCommandTextExtractor that returns empty array", () => {
    const expected: ExtractedMapTexts = {
      events: [
        {
          eventId: 1,
          pageIndex: 0,
          note: "",
          noteItems: [],
          name: "",
          commands: [
            {
              code: 401,
              paramIndex: 0,
              speaker: "bob",
              value: "testMessage",
            },
          ],
        },
      ],
      noteItems: [],
      note: "",
      displayedName: "",
    };
    const result: ExtractedMapTexts = extractor.extractMapTexts(mockMap);
    expect(result).toEqual(expected);
  });
});

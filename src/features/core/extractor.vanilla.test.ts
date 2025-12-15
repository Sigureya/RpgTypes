import { test, expect, describe, vi } from "vitest";
import type { Data_CommonEvent, Data_Map, EventCommand } from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeMapData,
  makeMapEventPage,
} from "@RpgTypes/rmmz";
import type {
  ExtractedCommonEventText,
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
  test("", () => {
    const expected: ExtractedCommonEventText = extractCommonEventTexts(
      mockCommonEvents,
      () => []
    );
    const result = extractor.extractCommonEventText(mockCommonEvents);
    expect(result).toEqual(expected);
  });
});
describe("extractMapTexts", () => {
  const mockMap: Readonly<Data_Map> = Object.freeze<Data_Map>(
    makeMapData({
      events: [
        {
          id: 1,
          name: "testEvent",
          note: "",
          x: 0,
          y: 0,
          pages: [makeMapEventPage({ list: mockCommands })],
        },
      ],
    })
  );
  test("", () => {
    const mockFn = vi.fn((): PluginCommandMzParameter[] => []);
    extractMapText(mockMap, mockFn);
    expect(mockFn).not.toBeCalled();
  });
  test("", () => {
    const result = extractor.extractMapTexts(mockMap);
    const expected = extractMapText(mockMap, () => []);
    expect(result).toEqual(expected);
  });
});

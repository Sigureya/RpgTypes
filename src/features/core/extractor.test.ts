import { test, expect, describe } from "vitest";
import {
  PLUGIN_COMMAND_MZ,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/libs/eventCommand";
import type { Command_PluginCommandMZ, Data_Map } from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent, makeMapEventPage } from "@RpgTypes/rmmz";
import {
  makeCommandScrollingTextBody,
  makeCommandScrollingTextHeader,
} from "@RpgTypes/rmmz/eventCommand/commands/message/scrollText/scrollText";
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import type {
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./extract/text/eventCommand";
import { createTextDataExtractorFromSchemas } from "./extractor";

const messagePluginSchema: PluginSchema = {
  pluginName: "MessagePlugin",
  target: "MZ",
  meta: {},
  dependencies: { base: [], orderAfter: [], orderBefore: [] },
  schema: {
    structs: [],
    params: [],
    commands: [
      {
        command: "ShowMessage",
        args: [
          {
            name: "text",
            attr: {
              kind: "string",
              default: "Hello World",
              text: "a message text",
            },
          },
        ],
      },
    ],
  },
};
const extractor = createTextDataExtractorFromSchemas([messagePluginSchema]);

describe("GameDataExtractor", () => {
  describe("extractArgs", () => {
    test("", () => {
      const command: Command_PluginCommandMZ = {
        code: PLUGIN_COMMAND_MZ,
        indent: 0,
        parameters: [
          "MessagePlugin",
          "ShowMessage",
          "CommandTitleText",
          { text: "test message" },
        ],
      };
      const expected: PluginCommandMzParameter[] = [
        {
          code: PLUGIN_COMMAND_MZ,
          value: "test message",
          paramIndex: 3,
          pluginName: "MessagePlugin",
          commandName: "ShowMessage",
          argName: "text",
          argTitle: "a message text",
        },
      ];
      const result = extractor.extractArgs(command);
      expect(result).toEqual(expected);
    });
  });
  describe("extractMapTexts", () => {
    test("", () => {
      const mockMap: Data_Map = makeMapData({
        displayName: "TestMap",
        note: "MockNote",
      });
      const expected: ExtractedMapTexts = {
        displayedName: "TestMap",
        events: [],
        note: "MockNote",
        noteItems: [],
      };
      const result: ExtractedMapTexts = extractor.extractMapTexts(mockMap);
      expect(result).toEqual(expected);
    });
    test("", () => {
      const mockMap: Data_Map = makeMapData({
        displayName: "TestMap",
        note: "MockNote",
        events: [
          makeMapEvent({
            name: "testEvent",
            id: 1,
            pages: [
              makeMapEventPage({
                list: [
                  {
                    code: PLUGIN_COMMAND_MZ,
                    indent: 0,
                    parameters: [
                      "MessagePlugin",
                      "ShowMessage",
                      "CommandTitleText",
                      { text: "test message" },
                    ],
                  },
                  makeCommandScrollingTextHeader({}),
                  makeCommandScrollingTextBody(
                    "A long time ago in a galaxy far, far away....",
                  ),
                ],
              }),
            ],
          }),
        ],
      });
      const expected: ExtractedMapTexts = {
        displayedName: "TestMap",
        events: [
          {
            commands: [
              {
                code: PLUGIN_COMMAND_MZ,
                commandName: "ShowMessage",
                paramIndex: 3,
                pluginName: "MessagePlugin",
                value: "test message",
                argName: "text",
                argTitle: "a message text",
              },
              {
                code: SHOW_SCROLLING_TEXT_BODY,
                paramIndex: 0,
                value: "A long time ago in a galaxy far, far away....",
              },
            ],
            eventId: 1,
            name: "testEvent",
            note: "",
            noteItems: [],
            pageIndex: 0,
          },
        ],
        note: "MockNote",
        noteItems: [],
      };
      const result: ExtractedMapTexts = extractor.extractMapTexts(mockMap);
      expect(result).toEqual(expected);
    });
  });
});

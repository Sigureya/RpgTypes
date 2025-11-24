import { test, expect, describe } from "vitest";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/rmmz";
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import type { PluginCommandMzParameter } from "./extract/text/eventCommand";
import { createTextDataExtractor } from "./extractor";

const messagePluginSchema: PluginSchema = {
  pluginName: "MessagePlugin",
  target: "MZ",
  meta: {},
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
            },
          },
        ],
      },
    ],
  },
};
const extractor = createTextDataExtractor([messagePluginSchema]);

describe("GameDataExtractor", () => {
  test("", () => {
    const command: Command_PluginCommandMZ = {
      code: PLUGIN_COMMAND_MZ,
      indent: 0,
      parameters: [
        "MessagePlugin",
        "ShowMessage",
        "",
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
      },
    ];
    const result = extractor.extractArgs(command);
    expect(result).toEqual(expected);
  });
});

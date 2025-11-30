import type {
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/rmmz";
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import type {
  CommandMapKey,
  CommandArgExtractors,
  PluginValues,
} from "@sigureya/rmmz-plugin-schema/features";
import { compileCommandExtractorsFromPlugins } from "@sigureya/rmmz-plugin-schema/features";
import { JSONPathJS } from "jsonpath-js";
import { extractPluginCommandMzArgs } from "./extract/plugin/pluginCommand";
import type {
  PluginCommandMzParameter,
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
  TextCommandParameter,
} from "./extract/text/eventCommand";
import type { GameDataExtractor } from "./extract/types";
import {
  extractBattleEventTexts,
  extractCommonEventTexts,
  extractMapText,
} from "./extractEventText";
import { extractTextFromEventCommandsEx } from "./getTextFromCommand";

export const createTextDataExtractorFromCommandItems = (
  commands: ReadonlyArray<[CommandMapKey, CommandArgExtractors]>
): GameDataExtractor => {
  type MapType = ReadonlyMap<CommandMapKey, CommandArgExtractors>;
  const map: MapType = new Map(commands);
  return new GameDataExtractorClass(map);
};

export const createTextDataExtractorFromSchemas = (
  schemas: ReadonlyArray<PluginSchema>
): GameDataExtractor => {
  const map = compileCommandExtractorsFromPlugins(
    schemas,
    (path) => new JSONPathJS(path)
  );
  return new GameDataExtractorClass(map);
};

class GameDataExtractorClass implements GameDataExtractor {
  private readonly _commandMap: ReadonlyMap<
    CommandMapKey,
    CommandArgExtractors
  >;
  constructor(commandMap: ReadonlyMap<CommandMapKey, CommandArgExtractors>) {
    this._commandMap = commandMap;
  }
  keys(): string[] {
    return Array.from(this._commandMap.keys());
  }
  extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts {
    return extractMapText(rpgMap, (command) => this.extractArgs(command));
  }
  extractBattleText(
    troop: ReadonlyArray<Data_Troop>
  ): ExtractedBattleEventText[][] {
    return extractBattleEventTexts(troop, (command) =>
      this.extractArgs(command)
    );
  }
  extractCommonEventText(
    commons: ReadonlyArray<Data_CommonEvent>
  ): ExtractedCommonEventText[] {
    return extractCommonEventTexts(commons, (command) =>
      this.extractArgs(command)
    );
  }

  extractArgs(command: Command_PluginCommandMZ): PluginCommandMzParameter[] {
    const args = extractPluginCommandMzArgs(command, this._commandMap);
    return args.values.filter(isSSS).map(
      (v): PluginCommandMzParameter => ({
        code: PLUGIN_COMMAND_MZ,
        value: v.value,
        paramIndex: 3,
        commandName: args.commandName,
        pluginName: args.pluginName,
      })
    );
  }
  extractCommandTexts(
    commands: ReadonlyArray<EventCommand>
  ): TextCommandParameter[] {
    return extractTextFromEventCommandsEx(commands, (command) =>
      this.extractArgs(command)
    );
  }
}

const isSSS = (v: PluginValues): v is PluginValues & { value: string } => {
  return typeof v.value === "string";
};

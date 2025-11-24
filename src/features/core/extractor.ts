import type {
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
} from "@RpgTypes/rmmz";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/rmmz";
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import type {
  CommandMapKey,
  CommandArgExtractors,
} from "@sigureya/rmmz-plugin-schema/features";
import { compileCommandExtractorsFromPlugins } from "@sigureya/rmmz-plugin-schema/features";
import { JSONPathJS } from "jsonpath-js";
import { extractPluginCommandMzArgs } from "./extract/plugin/pluginCommand";
import type {
  PluginCommandMzParameter,
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
} from "./extract/text/eventCommand";
import type { GameDataExtractor } from "./extract/types";
import {
  extractBattleEventTexts,
  extractCommonEventTexts,
  extractMapText,
} from "./extractEventText";

export const createTextDataExtractor = (
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
    return args.values.map(
      (v): PluginCommandMzParameter => ({
        code: PLUGIN_COMMAND_MZ,
        value: v.value as string,
        paramIndex: 3,
        commandName: args.commandName,
        pluginName: args.pluginName,
      })
    );
  }
}

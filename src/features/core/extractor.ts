import type { Data_CommonEvent, Data_Map, Data_Troop } from "@RpgTypes/rmmz";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/rmmz";
import type {
  CommandMapKey,
  CommandArgExtractors,
  PluginValues,
  CommandExtractResult,
} from "@sigureya/rmmz-plugin-schema/features";
import { extractPluginCommandParams } from "./extract/plugin/pluginCommand";
import type { PluginCommandMzParameter } from "./extract/text/eventCommand";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
} from "./extract/text/eventCommand/types";
import type { GameDataExtractor } from "./extract/types";
import {
  extractBattleEventTexts,
  extractCommonEventTexts,
  extractMapText,
} from "./extractEventText";

export const createTextDataExtractor = (
  commandMap: ReadonlyMap<CommandMapKey, CommandArgExtractors>
): GameDataExtractor => {
  return new GameDataExtractorClass(commandMap);
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
    return extractMapText(rpgMap, (command) => {
      const args = extractPluginCommandParams(command, this._commandMap);
      return args.values.map((v) => convertPluginCommand(args, v));
    });
  }
  extractBattleText(
    troop: ReadonlyArray<Data_Troop>
  ): ExtractedBattleEventText[][] {
    return extractBattleEventTexts(troop, (command) => {
      const args = extractPluginCommandParams(command, this._commandMap);
      return args.values.map((v) => convertPluginCommand(args, v));
    });
  }
  extractCommonEventText(
    commons: ReadonlyArray<Data_CommonEvent>
  ): ExtractedCommonEventText[] {
    return extractCommonEventTexts(commons, (command) => {
      const args = extractPluginCommandParams(command, this._commandMap);
      return args.values.map((v) => convertPluginCommand(args, v));
    });
  }
}

const convertPluginCommand = (
  { commandName, pluginName }: CommandExtractResult,
  value: PluginValues
): PluginCommandMzParameter => ({
  code: PLUGIN_COMMAND_MZ,
  value: value.value as string,
  paramIndex: 3,
  commandName,
  pluginName,
});

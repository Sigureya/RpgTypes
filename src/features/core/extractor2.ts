import { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs/eventCommand";
import type {
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
} from "@RpgTypes/rmmz";
import {
  createCommandExtractorMapFromPipeline,
  extractPluginCommandWithExtractor,
} from "@sigureya/rmmz-plugin-schema";
import type {
  CommandArgExtractors,
  CommandMapKey,
  PluginCommandExtractErrorHandlers,
  PluginCommandExtractorSource,
  PluginExtractedValue,
} from "@sigureya/rmmz-plugin-schema";
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
  TextPluginCommandParameter,
} from "./extract/text/eventCommand";
import {
  extractBattleEventTexts,
  extractCommonEventTexts,
  extractMapText,
} from "./extractEventText";

export const createTextDataExtractorV2 = (
  source: PluginCommandExtractorSource,
  errorHandlers: PluginCommandExtractErrorHandlers,
): EventContainerExtractor => {
  const map = createCommandExtractorMapFromPipeline(source);
  return new GameDataExtractorClassV2(map, errorHandlers);
};

class GameDataExtractorClassV2 implements EventContainerExtractor {
  private readonly _commandMap: ReadonlyMap<
    CommandMapKey,
    CommandArgExtractors
  >;

  constructor(
    commandMap: ReadonlyMap<CommandMapKey, CommandArgExtractors>,
    private readonly _errorHandlers: PluginCommandExtractErrorHandlers,
  ) {
    this._commandMap = commandMap;
  }

  extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts {
    return extractMapText(rpgMap, (command) => this.extractArgs(command));
  }

  extractBattleText(troop: Data_Troop): ExtractedBattleEventText[] {
    return extractBattleEventTexts(troop, (command) =>
      this.extractArgs(command),
    );
  }

  extractCommonEventText(commons: Data_CommonEvent): ExtractedCommonEventText {
    return extractCommonEventTexts(commons, (command) =>
      this.extractArgs(command),
    );
  }

  private extractArgs(
    command: Command_PluginCommandMZ,
  ): TextPluginCommandParameter[] {
    const result = extractPluginCommandWithExtractor(
      command,
      this._commandMap,
      this._errorHandlers,
    );
    return result.args.filter(isStringValue).map(
      (entry): TextPluginCommandParameter => ({
        code: PLUGIN_COMMAND_MZ,
        value: entry.value,
        paramIndex: 3,
        argName: entry.param.name,
        argTitle: entry.param.attr.text ?? entry.param.name,
        commandName: result.commandName,
        pluginName: result.pluginName,
      }),
    );
  }
}

const isStringValue = (
  value: PluginExtractedValue,
): value is PluginExtractedValue & { value: string } => {
  return typeof value.value === "string";
};

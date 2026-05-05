import { normarizeText, PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import type {
  CommandCodeFormat,
  ExtractedCommandItem,
  ExtractedPluginCommandItem,
} from "../../sss/types";
import type { TextCommandParameter, TextPluginCommandParameter } from "./types";

export const convertCommandInfo = <UUID, Other extends string[]>(
  command: TextCommandParameter,
  dataId: number,
  filename: string,
  commandNameFn: (command: TextCommandParameter) => string,
  uuidGenFunc: (text: string) => UUID,
  otherData: Other,
): ExtractedCommandItem<UUID, Other> | ExtractedPluginCommandItem<UUID> => {
  if (command.code === PLUGIN_COMMAND_MZ) {
    return pluginCommandEx(command, dataId, filename, uuidGenFunc, otherData);
  }
  const normarizedText = normarizeText(command.value);
  return {
    otherData,
    uuid: uuidGenFunc(normarizedText),
    kind: commandNameFn(command),
    baseText: normarizedText,
    filename,
    id: dataId,
    speaker: command.speaker ?? "",
    dataKey: commandCode(command),
  };
};

const commandCode = (command: TextCommandParameter): CommandCodeFormat => {
  return `code:${command.code}`;
};

const pluginCommandEx = <UUID, Other extends string[]>(
  command: TextPluginCommandParameter,
  dataId: number,
  filename: string,
  uuidGenFunc: (text: string) => UUID,
  otherData: Other,
): ExtractedPluginCommandItem<UUID> => {
  const normarizedText = normarizeText(command.value);
  return {
    otherData: [command.pluginName, ...otherData],
    uuid: uuidGenFunc(normarizedText),
    kind: `${pluginCommandKind(command)}`,
    baseText: normarizedText,
    filename,
    id: dataId,
    dataKey: `code:${command.code}-${command.argName}`,
  };
};

const pluginCommandKind = (command: TextPluginCommandParameter): string => {
  return `${command.commandName}.${command.argTitle}`;
};

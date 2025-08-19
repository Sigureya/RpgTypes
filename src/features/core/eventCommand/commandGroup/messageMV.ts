// メモ
// MV→MZで変換。
// 発言者情報を確保し、MZ方式で記録。
// さらにMVに戻す

import type {
  Command_ShowMessageHeader,
  Command_PluginCommandMV,
  EventCommand,
} from "@RpgTypes/rmmz";
import { SHOW_MESSAGE } from "@RpgTypes/rmmz";

export const convertMessageHeadMZtoMV = (
  list: ReadonlyArray<EventCommand>
): EventCommand[] => {
  return list.reduce((acc: EventCommand[], command) => {
    if (command.code === SHOW_MESSAGE) {
      const speakerCommand = createSpeakerCommand(command);
      return [...acc, speakerCommand, command];
    }
    return [...acc, command];
  }, []);
};

const createSpeakerCommand = (
  command: Command_ShowMessageHeader
): Command_PluginCommandMV => ({
  code: 356,
  indent: command.indent,
  parameters: [`Speaker ${command.parameters[4]}`],
});

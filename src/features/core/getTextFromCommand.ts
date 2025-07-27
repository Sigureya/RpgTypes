import type { EventCommand } from "@RpgTypes/rmmz";
import { mappingCommandList } from "./eventCommand/allMapping";
import type { TextCommandMapper } from "./eventCommand/textCommandMapper";
import {
  extractTextFromActorCommand,
  extractTextParamsFromChoice,
} from "./extract/text/eventCommand";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { extractTextParamFromMessage } from "./extractGroupText";
import { processEventPages } from "./rpg";

type CommandParam = TextCommandParameter;
export const extractTextFromEventCommands = (
  list: ReadonlyArray<EventCommand>
): TextCommandParameter[][] => {
  return mappingCommandList(list, extractTextMapper);
};
export const extractTextFromEventPages = (event: {
  pages: { list: EventCommand[] }[];
}): CommandParam[][][] => {
  return processEventPages(event, (page) =>
    extractTextFromEventCommands(page.list)
  );
};

const extractTextMapper: TextCommandMapper<TextCommandParameter[]> = {
  changeName: (command) => [extractTextFromActorCommand(command)],
  changeNickname: (command) => [extractTextFromActorCommand(command)],
  changeProfile: (command) => [extractTextFromActorCommand(command)],
  showChoices: (command) => extractTextParamsFromChoice(command),
  showScrollingText: (groop) => {
    return [groop.mergedBody()];
  },
  showMessage(data): TextCommandParameter[] {
    if (data.bodies.length === 0) {
      return [];
    }
    return [extractTextParamFromMessage(data)];
  },
  choiceWhen() {
    return [];
  },
  comment(groop) {
    return [groop.mergedBody()];
  },
  script: (groop) => [], // readScript(groop),
  other: () => [],
  commentBody: () => [],
};

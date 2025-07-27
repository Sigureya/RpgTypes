import type { COMMENT_HEAD, SCRIPT_EVAL } from "@RpgTypes/rmmz";
import { type EventCommand } from "@RpgTypes/rmmz";
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
    return [
      {
        code: groop.header.code,
        paramIndex: 0,
        value: groop.getBodyText(),
      },
    ];
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
  comment: (groop) => [
    {
      code: 108 satisfies typeof COMMENT_HEAD,
      paramIndex: 0,
      value: groop.getBodyText(),
    },
  ],

  script: (groop) => [
    {
      code: 355 satisfies typeof SCRIPT_EVAL,
      paramIndex: 0,
      value: groop.getBodyText(),
    },
  ],
  other: () => [],
  commentBody: () => [],
};

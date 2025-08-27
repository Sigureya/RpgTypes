import type { TextCommandParameter } from "./text/eventCommand";

export interface ExtractedBattleEventText {
  eventId: number;
  commands: TextCommandParameter[];
  pageIndex: number;
}

export interface ExtractedCommonEventText {
  eventId: number;
  commands: TextCommandParameter[];
}

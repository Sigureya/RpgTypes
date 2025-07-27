import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";

export interface TextCommandParameter extends CommandParameter<string> {
  speaker?: string;
  paramIndex: number;
  value: string;
  code: number;
}

export interface ExtractedEventText {
  eventId: number;
  pageIndex: number;
  commands: TextCommandParameter[];
}

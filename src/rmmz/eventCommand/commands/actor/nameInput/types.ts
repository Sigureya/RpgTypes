import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { NAME_INPUT_PROCESSING } from "@RpgTypes/rmmz/rpg";

export interface Command_NameInputProcessing
  extends EventCommandLike2<typeof NAME_INPUT_PROCESSING> {
  parameters: ParamArray_NameInputProcessing;
}

export type ParamArray_NameInputProcessing = [actorId: number, param1: unknown];

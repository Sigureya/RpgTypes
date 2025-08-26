import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_GOLD, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeGold
  extends EventCommandLike2<typeof CHANGE_GOLD> {
  parameters: [
    operation: ValueOf<Operation_PlusMinus>,
    operandType: number,
    operand: number
  ];
}

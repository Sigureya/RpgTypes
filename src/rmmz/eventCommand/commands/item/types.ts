import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type {
  CHANGE_ARMORS,
  CHANGE_WEAPONS,
  CHANGE_ITEMS,
  Operation_PlusMinus,
} from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeItems2
  extends EventCommandLike2<typeof CHANGE_ITEMS> {
  parameters: [
    operation: ValueOf<Operation_PlusMinus>,
    itemId: number,
    value: number
  ];
}

export interface Command_ChangeWeapons2
  extends EventCommandLike2<typeof CHANGE_WEAPONS> {
  parameters: [
    operation: ValueOf<Operation_PlusMinus>,
    weaponId: number,
    value: number
  ];
}

export interface Command_ChangeArmors2
  extends EventCommandLike2<typeof CHANGE_ARMORS> {
  parameters: [
    operation: ValueOf<Operation_PlusMinus>,
    armorId: number,
    value: number
  ];
}

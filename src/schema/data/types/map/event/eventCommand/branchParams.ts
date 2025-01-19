import type {
  BranchCode,
  Operation_PlusMinus,
  Toggle,
  ValueOf,
} from "./paramaters";
import type { CommandTemplate } from "./types/";

export type BranchParameters = BranchMapper["parameterTable"];

export type BranchMapper = CommandTemplate<
  BranchCode,
  { branchBy: ValueOf<BranchCode>; params: unknown[] },
  "branchBy",
  "params",
  {
    SWITCH: [
      branchCode: BranchCode["SWITCH"],
      switchId: number,
      switchValue: ValueOf<Toggle>
    ];
    VARIABLE: [
      branchCode: BranchCode["VARIABLE"],
      variableId: number,
      operand: number,
      value: number
    ];
    SELF_SWITCH: [
      branchCode: BranchCode["SELF_SWITCH"],
      selfSwitchId: string,
      value: boolean
    ];
    TIMER: [
      branchCode: BranchCode["TIMER"],
      time: number,
      operation: ValueOf<Operation_PlusMinus>
    ];
    ACTOR: [
      branchCode: BranchCode["ACTOR"],
      actorId: number,
      operand: number,
      value: number
    ];
    ENEMY: [branchCode: BranchCode["ENEMY"], enemyId: number];
    CHARACTER: [branchCode: BranchCode["CHARACTER"], characterId: number];
    GOLD: [branchCode: BranchCode["GOLD"], value: number, compair: 0 | 1 | 2];
    ITEM: [branchCode: BranchCode["ITEM"], itemId: number];
    WEAPON: [branchCode: BranchCode["WEAPON"], weaponId: number];
    ARMOR: [branchCode: BranchCode["ARMOR"], armorId: number];
    BUTTON: [branchCode: BranchCode["BUTTON"], buttonId: number];
    SCRIPT: [branchCode: BranchCode["SCRIPT"], script: string];
    VEHICLE: [branchCode: BranchCode["VEHICLE"], vehicleId: number];
  }
>;

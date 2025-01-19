import type {
  BranchCode,
  BranchCodeTable,
  Operation_PlusMinus,
  Toggle,
  ValueOf,
} from "./paramaters";
import type { CommandTemplate } from "./types/";

export type BranchParameters = BranchMapper["parameterTable"];

export type BranchMapper = CommandTemplate<
  BranchCodeTable,
  { branchBy: BranchCode; params: unknown[] },
  "branchBy",
  "params",
  {
    SWITCH: [
      branchCode: BranchCodeTable["SWITCH"],
      switchId: number,
      switchValue: ValueOf<Toggle>
    ];
    VARIABLE: [
      branchCode: BranchCodeTable["VARIABLE"],
      variableId: number,
      operand: number,
      value: number
    ];
    SELF_SWITCH: [
      branchCode: BranchCodeTable["SELF_SWITCH"],
      selfSwitchId: string,
      value: boolean
    ];
    TIMER: [
      branchCode: BranchCodeTable["TIMER"],
      time: number,
      operation: ValueOf<Operation_PlusMinus>
    ];
    ACTOR: [
      branchCode: BranchCodeTable["ACTOR"],
      actorId: number,
      operand: number,
      value: number
    ];
    ENEMY: [branchCode: BranchCodeTable["ENEMY"], enemyId: number];
    CHARACTER: [branchCode: BranchCodeTable["CHARACTER"], characterId: number];
    GOLD: [
      branchCode: BranchCodeTable["GOLD"],
      value: number,
      compair: 0 | 1 | 2
    ];
    ITEM: [branchCode: BranchCodeTable["ITEM"], itemId: number];
    WEAPON: [branchCode: BranchCodeTable["WEAPON"], weaponId: number];
    ARMOR: [branchCode: BranchCodeTable["ARMOR"], armorId: number];
    BUTTON: [branchCode: BranchCodeTable["BUTTON"], buttonId: number];
    SCRIPT: [branchCode: BranchCodeTable["SCRIPT"], script: string];
    VEHICLE: [branchCode: BranchCodeTable["VEHICLE"], vehicleId: number];
  }
>;

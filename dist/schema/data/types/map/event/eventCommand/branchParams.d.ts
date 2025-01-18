import type { BranchCode, Operation_PlusMinus, Toggle, ValueOf } from "./paramaters";
export type BranchBySwitch = [
    branchCode: BranchCode["SWITCH"],
    switchId: number,
    switchValue: ValueOf<Toggle>
];
export type BranchByVariable = [
    branchCode: BranchCode["VARIABLE"],
    variableId: number,
    operand: number,
    value: number
];
export type BranchBySelfSwitch = [
    branchCode: BranchCode["SELF_SWITCH"],
    selfSwitch: string,
    selfSwitchValue: ValueOf<Toggle>
];
export type BranchByTimer = [
    branchCode: BranchCode["TIMER"],
    time: number,
    operation: ValueOf<Operation_PlusMinus>
];
export type BranchByActor = [
    branchCode: BranchCode["ACTOR"],
    actorId: number,
    operand: number,
    value: number
];

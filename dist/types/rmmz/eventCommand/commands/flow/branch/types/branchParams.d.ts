import { Toggle, Operation_PlusMinus } from '../../../../../utils';
import { ValueOf } from 'src/libs/templates/valueOf';
import { BranchCodeTable } from './branch';
export type BranchParam_Switch = [
    branchCode: BranchCodeTable["SWITCH"],
    switchId: number,
    switchValue: ValueOf<Toggle>
];
export type BranchParam_Variable = [
    branchCode: BranchCodeTable["VARIABLE"],
    variableId: number,
    operand: number,
    value: number
];
export type BranchParam_SelfSwitch = [
    branchCode: BranchCodeTable["SELF_SWITCH"],
    selfSwitchId: string,
    value: ValueOf<Toggle>
];
export type BranchParam_Timer = [
    branchCode: BranchCodeTable["TIMER"],
    time: number,
    operation: ValueOf<Operation_PlusMinus>
];
export type BranchParam_Actor = [
    branchCode: BranchCodeTable["ACTOR"],
    actorId: number,
    operand: number,
    value: number
];
export type BranchParam_Enemy = [
    branchCode: BranchCodeTable["ENEMY"],
    enemyId: number
];
export type BranchParam_Character = [
    branchCode: BranchCodeTable["CHARACTER"],
    characterId: number
];
export type BranchParam_Gold = [
    branchCode: BranchCodeTable["GOLD"],
    value: number,
    compair: 0 | 1 | 2
];
export type BranchParam_Item = [
    branchCode: BranchCodeTable["ITEM"],
    itemId: number
];
export type BranchParam_Weapon = [
    branchCode: BranchCodeTable["WEAPON"],
    weaponId: number
];
export type BranchParam_Armor = [
    branchCode: BranchCodeTable["ARMOR"],
    armorId: number
];
export type BranchParam_Button = [
    branchCode: BranchCodeTable["BUTTON"],
    buttonId: number
];
export type BranchParam_Script = [
    branchCode: BranchCodeTable["SCRIPT"],
    script: string
];
export type BranchParam_Vehicle = [
    branchCode: BranchCodeTable["VEHICLE"],
    vehicleId: number
];
export type BranchParameters = BranchParam_Switch | BranchParam_Variable | BranchParam_SelfSwitch | BranchParam_Timer | BranchParam_Actor | BranchParam_Enemy | BranchParam_Character | BranchParam_Gold | BranchParam_Item | BranchParam_Weapon | BranchParam_Armor | BranchParam_Button | BranchParam_Script | BranchParam_Vehicle;

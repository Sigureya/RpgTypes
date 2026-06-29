import { CONDITIONAL_BRANCH, EventCommandLike } from '../../../../../../libs';
import { BranchByActorName } from './actor';
import { BranchParam_Switch, BranchParam_Actor, BranchParam_Armor, BranchParam_Button, BranchParam_Character, BranchParam_Enemy, BranchParam_Gold, BranchParam_Item, BranchParam_Script, BranchParam_SelfSwitch, BranchParam_Variable, BranchParam_Vehicle, BranchParam_Timer, BranchParam_Weapon } from './branchParams';
export type CommnandUnion_Branch = Command_BranchBySwitch | Command_BranchByActor | Command_BranchByArmor | Command_BranchByButton | Command_BranchByCharacter | Command_BranchByEnemy | Command_BranchByGold | Command_BranchByItem | Command_BranchByScript | Command_BranchBySelfSwitch | Command_BranchByVariable | Command_BranchByVehicle | Command_BranchByTimer | Command_BranchByWeapon;
export interface Command_BranchBySwitch extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Switch> {
    parameters: BranchParam_Switch;
}
export interface Command_BranchByActor extends EventCommandLike<typeof CONDITIONAL_BRANCH> {
    parameters: BranchParam_Actor | BranchByActorName;
}
export interface Command_BranchByArmor extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Armor> {
    parameters: BranchParam_Armor;
}
export interface Command_BranchByButton extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Button> {
    parameters: BranchParam_Button;
}
export interface Command_BranchByCharacter extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Character> {
    parameters: BranchParam_Character;
}
export interface Command_BranchByEnemy extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Enemy> {
    parameters: BranchParam_Enemy;
}
export interface Command_BranchByGold extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Gold> {
    parameters: BranchParam_Gold;
}
export interface Command_BranchByItem extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Item> {
    parameters: BranchParam_Item;
}
export interface Command_BranchByScript extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Script> {
    parameters: BranchParam_Script;
}
export interface Command_BranchBySelfSwitch extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_SelfSwitch> {
    parameters: BranchParam_SelfSwitch;
}
export interface Command_BranchByVariable extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Variable> {
    parameters: BranchParam_Variable;
}
export interface Command_BranchByVehicle extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Vehicle> {
    parameters: BranchParam_Vehicle;
}
export interface Command_BranchByTimer extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Timer> {
    parameters: BranchParam_Timer;
}
export interface Command_BranchByWeapon extends EventCommandLike<typeof CONDITIONAL_BRANCH, BranchParam_Weapon> {
    parameters: BranchParam_Weapon;
}

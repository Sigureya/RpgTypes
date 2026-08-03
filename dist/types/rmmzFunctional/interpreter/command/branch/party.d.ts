import { BranchParam_Gold, BranchParam_Item, BranchParam_Weapon, BranchParam_Armor } from '../../../../rmmz/eventCommand';
import { Data_Item, Data_Weapon, Data_Armor } from '../../../../rmmz/rpg';
import { Rmmz_Party } from '../../../../rmmzRuntime';
type Rmmz_PartyHasItem = Pick<Rmmz_Party, "hasItem" | "gold">;
export declare const evaluteBranchByGold: (parameters: BranchParam_Gold, party: Rmmz_PartyHasItem) => boolean;
export declare const evaluteBranchByItem: (parameters: BranchParam_Item, party: Rmmz_PartyHasItem, fn: (itemId: number) => Data_Item | null | undefined) => boolean;
export declare const evaluteBranchByWeapon: (parameters: BranchParam_Weapon, party: Rmmz_PartyHasItem, fn: (weaponId: number) => Data_Weapon | null | undefined) => boolean;
export declare const evaluteBranchByArmor: (parameters: BranchParam_Armor, party: Rmmz_PartyHasItem, fn: (armorId: number) => Data_Armor | null | undefined) => boolean;
export {};

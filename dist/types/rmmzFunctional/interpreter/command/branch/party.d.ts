import { BranchParam_Gold, BranchParam_Item, BranchParam_Weapon, BranchParam_Armor } from '../../../../rmmz/eventCommand';
import { Rmmz_Party } from '../../../../rmmzRuntime';
import { Provider_RpgData } from '../../../../rmmz/rpg';
type Rmmz_PartyHasItem = Pick<Rmmz_Party, "hasItem" | "gold">;
export declare const evaluteBranchByGold: (parameters: BranchParam_Gold, party: Rmmz_PartyHasItem) => boolean;
export declare const evaluteBranchByItem: (parameters: BranchParam_Item, party: Rmmz_PartyHasItem, provider: Provider_RpgData) => boolean;
export declare const evaluteBranchByWeapon: (parameters: BranchParam_Weapon, party: Rmmz_PartyHasItem, provider: Provider_RpgData) => boolean;
export declare const evaluteBranchByArmor: (parameters: BranchParam_Armor, party: Rmmz_PartyHasItem, provider: Provider_RpgData) => boolean;
export {};

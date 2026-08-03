import { Provider_RpgItems, Provider_RpgState, Trait, Data_Armor, Data_State, Provider_RpgData } from '../../rmmz';
import { NewBattler, BattlerVariables } from './types';
export declare const resolveBattlerTraits: (battler: NewBattler, provider: Provider_RpgData) => Trait[];
export declare const resolveBattlerArmors: (actor: NewBattler, provider: Provider_RpgItems) => Data_Armor[];
export declare const resolveBattlerStates: (battler: BattlerVariables, provider: Provider_RpgState) => Data_State[];

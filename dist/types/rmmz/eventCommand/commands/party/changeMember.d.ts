import { Command_ChangeGold, ParamObject_ChangeGold, ParamObject_ChangeGoldV } from './types/changeGold';
import { Command_ChangePartyMember, ParamObject_ChangePartyMember } from './types/changeMember';
export declare const makeCommandAddPartyMember: (param: ParamObject_ChangePartyMember, indent?: number) => Command_ChangePartyMember;
export declare const makeCommandRemovePartyMember: (param: ParamObject_ChangePartyMember, indent?: number) => Command_ChangePartyMember;
export declare const makeCommandGainGold: (param: ParamObject_ChangeGold, indent?: number) => Command_ChangeGold;
export declare const makeCommandLoseGold: (param: ParamObject_ChangeGold, indent?: number) => Command_ChangeGold;
export declare const makeCommandGainGoldByVariable: (param: ParamObject_ChangeGoldV, indent?: number) => Command_ChangeGold;
export declare const makeCommandLoseGoldByVariable: (param: ParamObject_ChangeGoldV, indent?: number) => Command_ChangeGold;

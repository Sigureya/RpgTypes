import type {
  Command_ChangeGold,
  ParamObject_ChangeGold,
  ParamObject_ChangeGoldV,
} from "./types/changeGold";
import type {
  Command_ChangePartyMember,
  ParamObject_ChangePartyMember,
} from "./types/changeMember";

export const makeCommandAddPartyMember = (
  param: ParamObject_ChangePartyMember,
  indent = 0,
): Command_ChangePartyMember => ({
  code: 129,
  parameters: [0, param.actorId],
  indent,
});

export const makeCommandRemovePartyMember = (
  param: ParamObject_ChangePartyMember,
  indent = 0,
): Command_ChangePartyMember => ({
  code: 129,
  parameters: [1, param.actorId],
  indent,
});

export const makeCommandGainGold = (
  param: ParamObject_ChangeGold,
  indent: number = 0,
): Command_ChangeGold => ({
  code: 125,
  parameters: [0, 0, param.value],
  indent,
});

export const makeCommandLoseGold = (
  param: ParamObject_ChangeGold,
  indent: number = 0,
): Command_ChangeGold => ({
  code: 125,
  parameters: [1, 0, param.value],
  indent,
});

export const makeCommandGainGoldByVariable = (
  param: ParamObject_ChangeGoldV,
  indent: number = 0,
): Command_ChangeGold => ({
  code: 125,
  parameters: [0, 1, param.variableId],
  indent,
});

export const makeCommandLoseGoldByVariable = (
  param: ParamObject_ChangeGoldV,
  indent: number = 0,
): Command_ChangeGold => ({
  code: 125,
  parameters: [1, 1, param.variableId],
  indent,
});

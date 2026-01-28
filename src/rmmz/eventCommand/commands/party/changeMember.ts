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

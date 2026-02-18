import type {
  Command_ChangeBattleBackground,
  ParamObject_ChangeBattleBackground,
} from "./types";

export const makeCommandChangeBattleBackground = (
  parameters: Partial<ParamObject_ChangeBattleBackground> = {},
  indent: number = 0,
): Command_ChangeBattleBackground => ({
  code: 283,
  indent: indent,
  parameters: [parameters.background1 ?? "", parameters.background2 ?? ""],
});

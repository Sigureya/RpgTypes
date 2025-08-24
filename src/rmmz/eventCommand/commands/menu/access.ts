import type {
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
  Command_ChangeFormationAccess,
} from "./types";

export const makeCommandDisableMenuAccess = (
  indent: number = 0
): Command_ChangeMenuAccess => ({
  code: 135,
  parameters: [1],
  indent,
});

export const makeCommandEnableMenuAccess = (
  indent: number = 0
): Command_ChangeMenuAccess => ({
  code: 135,
  parameters: [0],
  indent,
});

export const makeCommandDisableSaveAccess = (
  indent: number = 0
): Command_ChangeSaveAccess => ({
  code: 134,
  parameters: [1],
  indent,
});

export const makeCommandEnableSaveAccess = (
  indent: number = 0
): Command_ChangeSaveAccess => ({
  code: 134,
  parameters: [0],
  indent,
});

export const makeCommandDisableFormationAccess = (
  indent: number = 0
): Command_ChangeFormationAccess => ({
  code: 137,
  parameters: [1],
  indent,
});

export const makeCommandEnableFormationAccess = (
  indent: number = 0
): Command_ChangeFormationAccess => ({
  code: 137,
  parameters: [0],
  indent,
});

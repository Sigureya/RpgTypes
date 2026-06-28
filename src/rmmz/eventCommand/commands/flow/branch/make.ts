import type {
  Command_BranchBySwitch,
  Command_BranchBySelfSwitch,
  Command_BranchByTimer,
} from "./types/command";

export const makeCommandBranchBySwitchON = (
  switchId: number,
  indent: number = 0,
): Command_BranchBySwitch => {
  return {
    code: 111,
    indent,
    parameters: [0, switchId, 0],
  };
};

export const makeCommandBranchBySwitchOFF = (
  switchId: number,
  indent: number = 0,
): Command_BranchBySwitch => {
  return {
    code: 111,
    indent,
    parameters: [0, switchId, 1],
  };
};

export const makeCommandBranchBySelfSwitchON = (
  selfSwitchId: string,
  indent: number = 0,
): Command_BranchBySelfSwitch => {
  return {
    code: 111,
    indent,
    parameters: [2, selfSwitchId, 0],
  };
};

export const makeCommandBranchBySelfSwitchOFF = (
  selfSwitchId: string,
  indent: number = 0,
): Command_BranchBySelfSwitch => {
  return {
    code: 111,
    indent,
    parameters: [2, selfSwitchId, 1],
  };
};

export const makeCommandBranchByTimerLess = (
  time: number,
  indent: number = 0,
): Command_BranchByTimer => {
  return {
    code: 111,
    indent,
    parameters: [3, time, 1],
  };
};

export const makeCommandBranchByTimerGreater = (
  time: number,
  indent: number = 0,
): Command_BranchByTimer => {
  return {
    code: 111,
    indent,
    parameters: [3, time, 0],
  };
};

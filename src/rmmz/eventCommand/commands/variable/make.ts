import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import {
  toArrayOperandConstant,
  toArrayOperandItemData,
  toArrayOperandRandom,
  toArrayOperandScript,
  toArrayOperandActorStatus,
  toArrayOperandVariable,
  toArrayOperandEnemyStatus,
} from "./convert";
import type {
  Command_ControlVariables,
  Operand_Constatant,
  Operand_Variable,
  Operand_Random,
  Operand_Script,
  Operand_ItemData,
  ParamObject_Operand_Constant,
  ParamObject_Operand_Variable,
  ParamObject_Operand_Random,
  ParamObject_WritingTarget,
  ParamObject_Operand_Script,
  ParamObject_Operand_ItemData,
  Operand_ActorStatus,
  Operand_EnemyStatus,
  ParamObject_Operand_ActorStatus,
  ParamObject_Operand_Enemy,
} from "./types";

interface MakeOtherParam {
  indent?: number;
  operation?: number;
}

export const makeCommandVariableFromConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Constatant> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandConstant(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Variable> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandVariable(target, value, other.operation ?? 0),
  };
};
export const makeCommandVariableFromRandom = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Random,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Random> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandRandom(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromScript = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Script,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Script> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandScript(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromItemData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ItemData,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_ItemData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandItemData(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromStatusData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_ActorStatus> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandActorStatus(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromEnemyData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Enemy,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_EnemyStatus> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandEnemyStatus(target, value, other.operation ?? 0),
  };
};

import type { Designation, Operation_AddSub } from "@RpgTypes/rmmz/utils";
import type {
  ParamObject_ChangeEnemyValue3,
  Command_ChangeEnemyTP,
  ParamArray_ChangeEnemyValue,
} from "./types";
import {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  ParamArray_ChangeEnemyHP,
} from "./types";

const makeCommandGainEnemyTP = (
  {
    enemyIndex = 0,
    value = 0,
    valueType = 0,
  }: Partial<ParamObject_ChangeEnemyValue3>,
  indent: number = 0
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: [
    1,
    enemyIndex,
    0 satisfies Operation_AddSub["ADD"],
    0 satisfies Designation["DIRECT"],
    value,
  ] satisfies ParamArray_ChangeEnemyValue,
});

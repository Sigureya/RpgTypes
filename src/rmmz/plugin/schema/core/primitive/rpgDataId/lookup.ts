import type { SourceIdUnion_RpgData } from "@RpgTypes/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/system";
import type { DataKindUnion } from "./rpgDataTypesNames";

const DATA = 0 as const;
const SYSTEM_V = 1 as const;
const SYSTEM_S = 2 as const;

const KIND_TABLE = {
  variable: SYSTEM_V,
  switch: SYSTEM_S,
  actor: DATA,
  item: DATA,
  weapon: DATA,
  armor: DATA,
  skill: DATA,
  class: DATA,
  state: DATA,
  troop: DATA,
  enemy: DATA,
  common_event: DATA,
} as const satisfies Record<DataKindUnion, number>;

const MODULE_TABLE = ["data", "system", "system"] as const;

export const lookupKind = (
  kind: string
):
  | SourceIdUnion_RpgData
  | SourceId_SystemSwitches
  | SourceId_SystemVariables
  | undefined => {
  const index = KIND_TABLE[kind as DataKindUnion];
  if (index === undefined) {
    return undefined;
  }
  const kindTable = [kind, "variables", "switches"] as const;
  return {
    author: "rmmz",
    module: MODULE_TABLE[index],
    kind: kindTable[index],
  } as
    | SourceIdUnion_RpgData
    | SourceId_SystemSwitches
    | SourceId_SystemVariables;
};

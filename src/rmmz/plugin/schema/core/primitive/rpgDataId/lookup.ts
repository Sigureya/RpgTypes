import type { SourceIdUnion_RpgData } from "@RpgTypes/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/system";
import type { SourceIdentifier } from "src/namedItemSource";
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

export interface SourceId_RmmzUnknown extends SourceIdentifier {
  author: "rmmz";
  module: "unknown";
  kind: string;
}

export const lookupKind = (
  kind: string
):
  | SourceIdUnion_RpgData
  | SourceId_SystemSwitches
  | SourceId_SystemVariables
  | SourceId_RmmzUnknown => {
  const index = KIND_TABLE[kind as DataKindUnion];
  if (index === undefined) {
    return {
      author: "rmmz",
      module: "unknown",
      kind: kind,
    };
  }
  const kindTable = [
    kind,
    "variable" satisfies SourceId_SystemVariables["kind"],
    "switch" satisfies SourceId_SystemSwitches["kind"],
  ] as const;
  return {
    author: "rmmz",
    module: MODULE_TABLE[index],
    kind: kindTable[index],
  } as
    | SourceIdUnion_RpgData
    | SourceId_SystemSwitches
    | SourceId_SystemVariables;
};

export const isRmmzDataKind = (
  sourceId: SourceIdentifier
): sourceId is
  | SourceIdUnion_RpgData
  | SourceId_SystemSwitches
  | SourceId_SystemVariables => {
  const xxx = lookupKind(sourceId.kind);
  return (
    xxx.author === sourceId.author &&
    xxx.module === sourceId.module &&
    xxx.kind === sourceId.kind
  );
};

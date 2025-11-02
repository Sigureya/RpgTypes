import type { SourceIdentifier } from "@RpgTypes/libs";
import type { SourceIdUnion_RpgData } from "@RpgTypes/rmmz/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/rmmz/system";
import type {
  DataKind_SystemUnion,
  DataKind_RpgUnion,
} from "./types/rpgDataTypesNames";

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
} as const satisfies Record<DataKind_RpgUnion | DataKind_SystemUnion, number>;

const MODULE_TABLE = ["data", "system", "system"] as const;

export interface SourceId_RmmzUnknown extends SourceIdentifier {
  author: "rmmz";
  module: "unknown";
  kind: string;
}

export type SourceId_ValidRmmzData =
  | SourceIdUnion_RpgData
  | SourceId_SystemSwitches
  | SourceId_SystemVariables;

export const lookupKind = <
  Source extends string = DataKind_RpgUnion | DataKind_SystemUnion
>(
  kind: Source
): SourceId_ValidRmmzData | SourceId_RmmzUnknown => {
  const index = KIND_TABLE[kind as DataKind_RpgUnion];
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
): sourceId is SourceId_ValidRmmzData => {
  const lookuped = lookupKind(sourceId.kind);
  return (
    lookuped.author === sourceId.author &&
    lookuped.module === sourceId.module &&
    lookuped.kind === sourceId.kind
  );
};

import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import { AUTHOR_RMMZ } from "@RpgTypes/namedItemSource";
import type { Data_State } from "./types";
import { SRC_DATA_STATE, MODULE_DATA } from "../../../sourceConstants";

export const makeStateData = (data: Partial<Data_State> = {}): Data_State => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  iconIndex: data.iconIndex ?? 0,
  message1: data.message1 ?? "",
  message2: data.message2 ?? "",
  message3: data.message3 ?? "",
  message4: data.message4 ?? "",
  traits: [],
  note: data.note ?? "",

  messageType: data.messageType ?? 0,
  releaseByDamage: data.releaseByDamage ?? false,
  restriction: data.restriction ?? 0,
  priority: data.priority ?? 0,
  motion: data.motion ?? 0,
  overlay: data.overlay ?? 0,
  removeAtBattleEnd: data.removeAtBattleEnd ?? false,
  removeByRestriction: data.removeByRestriction ?? false,
  autoRemovalTiming: data.autoRemovalTiming ?? 0,
  minTurns: data.minTurns ?? 0,
  maxTurns: data.maxTurns ?? 0,
  removeByDamage: data.removeByDamage ?? false,
  chanceByDamage: data.chanceByDamage ?? 0,
  removeByWalking: data.removeByWalking ?? false,
  stepsToRemove: data.stepsToRemove ?? 0,
});

export const stateSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_STATE,
});

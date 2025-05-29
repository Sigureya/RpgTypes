import {
  SRC_DATA_ACTOR,
  type SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import type { Data_Actor } from "./actor";
import { AUTHOR_RMMZ, MODULE_DATA } from "@RpgTypes/namedItemSource";

export const makeActorData = (actor: Partial<Data_Actor> = {}): Data_Actor => ({
  name: actor.name ?? "",
  id: actor.id ?? 0,
  battlerName: actor.battlerName ?? "",
  characterName: actor.characterName ?? "",
  characterIndex: actor.characterIndex ?? 0,
  faceName: actor.faceName ?? "",
  faceIndex: actor.faceIndex ?? 0,
  traits: [],
  note: actor.note ?? "",
  classId: actor.classId ?? 0,
  nickname: actor.nickname ?? "",
  profile: actor.profile ?? "",
  equips: [],
  initialLevel: actor.initialLevel ?? 0,
  maxLevel: actor.maxLevel ?? 0,
});

export const makeActorSourceIdentifier = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ACTOR,
});

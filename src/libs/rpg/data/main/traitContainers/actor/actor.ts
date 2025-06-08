import type { Data_Actor } from "./types";
import { MODULE_DATA, SRC_DATA_ACTOR } from "src/rpg";
import { AUTHOR_RMMZ, type SourceIdentifier } from "src/namedItemSource";

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

export const actorSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ACTOR,
});

export const normalizeDataActor = (data: Partial<Data_Actor>): Data_Actor => {
  return {
    name: data.name ?? "",
    id: data.id ?? 0,
    battlerName: data.battlerName ?? "",
    characterName: data.characterName ?? "",
    characterIndex: data.characterIndex ?? 0,
    faceName: data.faceName ?? "",
    faceIndex: data.faceIndex ?? 0,
    traits: [],
    note: data.note ?? "",
    classId: data.classId ?? 0,
    nickname: data.nickname ?? "",
    profile: data.profile ?? "",
    equips: [],
    initialLevel: data.initialLevel ?? 0,
    maxLevel: data.maxLevel ?? 0,
  };
};

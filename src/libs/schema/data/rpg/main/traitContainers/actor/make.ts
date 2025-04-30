import type { Data_Actor } from "./actor";

export const makeActor = (actor: Partial<Data_Actor> = {}): Data_Actor => ({
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

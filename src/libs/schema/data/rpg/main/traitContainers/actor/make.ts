import type { Data_Actor } from "./actor";

export const makeActor = (): Data_Actor => ({
  name: "",
  id: 0,
  profile: "",
  nickname: "",
  initialLevel: 0,
  maxLevel: 0,
  classId: 0,
  battlerName: "",
  characterIndex: 0,
  characterName: "",
  equips: [],
  faceIndex: 0,
  faceName: "",
  traits: [],
  note: "",
});

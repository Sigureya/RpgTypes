import type { Rmmz_Level } from "./base/level";
import type { Rmmz_Battler } from "./battler";

export interface Rmmz_Actor extends Rmmz_Battler, Rmmz_Level {
  actorId(): number;
  changeEquipById(etypeId: number, itemId: number): void;
  setName(name: string): void;
  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  changeClass(classId: number, keepExp: boolean): void;
  setNickname(nickname: string): void;
  setProfile(profile: string): void;
  addParam(paramId: number, value: number): void;
  learnSkill(skillId: number): void;
  forgetSkill(skillId: number): void;
}

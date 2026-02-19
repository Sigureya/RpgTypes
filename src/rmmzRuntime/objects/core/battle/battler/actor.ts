import type { Rmmz_Battler } from "./battler";

export interface Rmmz_Actor extends Rmmz_Battler {
  actorId(): number;
  changeEquipById(etypeId: number, itemId: number): void;
  setName(name: string): void;
  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  changeClass(classId: number, keepExp: boolean): void;
  setNickname(nickname: string): void;
  setProfile(profile: string): void;
  changeExp(exp: number, show: boolean): void;
  changeLevel(level: number, show: boolean): void;
  addParam(paramId: number, value: number): void;
  learnSkill(skillId: number): void;
  forgetSkill(skillId: number): void;
}

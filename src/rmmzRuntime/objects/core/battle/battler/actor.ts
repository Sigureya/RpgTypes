import type { Rmmz_Battler } from "./battler";

export interface Rmmz_Actor extends Rmmz_Battler {
  actorId(): number;
  changeEquipById(etypeId: number, itemId: number): void;
  setName(name: string): void;
  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  changeClass(classId: number, keepExp: boolean): void;
  chnageNickname(nickname: string): void;
  changeProfile(profile: string): void;
}

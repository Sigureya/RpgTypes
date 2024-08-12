import type { Data_TraitContainer, Data_NamedItem } from "./bases";

export interface Data_Actor extends Data_TraitContainer, Data_NamedItem {
  battlerName: string;
  characterIndex: number;
  characterName: string;
  classId: number;
  equips: number[];
  faceIndex: number;
  faceName: string;
  initialLevel: number;
  maxLevel: number;
  nickname: string;
  profile: string;
}

import { Data_TraitContainer, Data_NamedItem } from "./bases";

export interface Actor extends Data_TraitContainer, Data_NamedItem {
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

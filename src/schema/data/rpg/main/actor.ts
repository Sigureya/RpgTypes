import type { Data_TraitContainer, Data_NamedItem, Trait } from "./bases";

export interface Data_Actor extends Data_TraitContainer, Data_NamedItem {
  name: string;
  id: number;
  profile: string;
  nickname: string;
  initialLevel: number;
  maxLevel: number;
  classId: number;
  /**
   * @description SideView Battler Image FileName
   */
  battlerName: string;
  characterIndex: number;
  /**
   * @description Filed Character Image FileName
   */
  characterName: string;
  equips: number[];
  faceIndex: number;
  /**
   * @description Face Image FileName
   */
  faceName: string;
  traits: Trait[];
  note: string;
}

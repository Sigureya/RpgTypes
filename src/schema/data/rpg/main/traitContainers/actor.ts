import type { Trait } from "./trait";
import type { Data_TraitContainer } from "./traitContatiner";

export interface Data_Actor extends Data_TraitContainer {
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

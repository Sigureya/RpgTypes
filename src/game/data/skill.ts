import { Data_UsableItem } from "./item/usableItem";

export interface Data_Skill extends Data_UsableItem {
  message1: string;
  message2: string;
  messageType: number;
  mpCost: number;
  requiredWtypeId1: number;
  requiredWtypeId2: number;
  stypeId: number;
  tpCost: number;
}

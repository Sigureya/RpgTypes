import type { Data_Map, MapEventPage } from "@RpgTypes/rmmz";
import { processMapEvents } from "../../rpg";
import type { ItemCommandParameter } from "./eventCommand/types";

const mmm = (map: Data_Map) => {
  return processMapEvents(map, (e) => {
    //    const commands=
    return 0;
  });
};

interface ItemXXX {
  pageCondition?: {
    itemId: number;
  };
  commands: ItemCommandParameter[];
}

// const conditionXX = (page: MapEventPage) => {
//   page.conditions.itemId;
// };

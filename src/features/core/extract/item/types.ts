import type { ItemCommandParameter } from "./eventCommand/types";

export interface ExtractedMapEventItems {
  pageCondition?: {
    itemId: number;
  };
  eventName: string;
  pageIndex: number;
  commands: ItemCommandParameter[];
}

export interface ExtractedTroopEventItems {
  troopId: number;
  eventName: string;
  pageIndex: number;
  commands: ItemCommandParameter[];
}

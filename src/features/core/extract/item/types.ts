import type { ItemCommandParameter } from "./eventCommand/types";

export interface ExtractedMapEventItems {
  pageCondition?: {
    itemId: number;
  };
  eventName: string;
  pageIndex: number;
  commands: ItemCommandParameter[];
}

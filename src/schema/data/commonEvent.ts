import { EventCommand } from "@schema/types";

export interface Data_CommonEvent {
  trigger: number;
  id: number;
  name: string;
  list: EventCommand[];
}

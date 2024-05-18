import { EventCommand } from "./eventCommand";

export interface Data_CommonEvent {
  trigger: number;
  id: number;
  name: string;
  list: EventCommand[];
}

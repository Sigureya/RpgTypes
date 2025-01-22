import { EventCommand } from './map';
export interface Data_CommonEvent {
    trigger: number;
    id: number;
    name: string;
    list: EventCommand[];
}

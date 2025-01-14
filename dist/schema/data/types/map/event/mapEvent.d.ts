import type { MapEventPage } from "./page";
export interface MapEvent {
    id: number;
    name: string;
    pages: MapEventPage[];
    note: string;
    x: number;
    y: number;
}

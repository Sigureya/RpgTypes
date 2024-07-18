import { MapEventPage } from "./page";

export { MapEventPage };
export interface MapEvent {
  id: number;
  name: string;
  pages: MapEventPage[];
  note: string;
  x: number;
  y: number;
}

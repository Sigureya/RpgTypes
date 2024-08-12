import type { MapEvent } from "./event";

export * from "./event";

interface Map_Filenames {
  battleback1Name: string;
  battleback2Name: string;
  parallaxName: string;
}

interface Map_Parallax {
  parallaxLoopX: boolean;
  parallaxLoopY: boolean;
  parallaxName: string;
  parallaxShow: boolean;
  parallaxSx: number;
  parallaxSy: number;
}
export interface Data_Map extends Map_Filenames, Map_Parallax {
  id: number;
  displayName: string;
  note: string;
  width: number;
  height: number;
  x: number;
  y: number;
  disableDashing: boolean;
  events: Array<MapEvent | null>;
  data: number[];
}

import type { MapEvent } from "./event";
import type { Encounter } from "./encounter";
import type { AudioFileParams } from "./event/eventCommand/types/audioFileParams";

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
interface Map_Audio {
  bgm: AudioFileParams;
  bgs: AudioFileParams;
  autoplayBgm: boolean;
  autoplayBgs: boolean;
}

export interface Data_Map extends Map_Filenames, Map_Parallax, Map_Audio {
  displayName: string;
  note: string;
  width: number;
  height: number;
  x: number;
  y: number;
  disableDashing: boolean;
  events: Array<MapEvent | null>;
  data: number[];
  encounterList: Encounter[];
}

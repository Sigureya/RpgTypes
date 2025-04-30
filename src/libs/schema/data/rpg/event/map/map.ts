import type { AudioFileParams } from "@RpgTypes/utils";
import type { Encounter } from "./members";
import type { EventCommand, MapEvent } from "./event/";
import type { MapEventContainer } from "./mapEventContainer";

export interface Data_Map extends MapEventContainer<EventCommand> {
  battleback1Name: string;
  battleback2Name: string;

  parallaxLoopX: boolean;
  parallaxLoopY: boolean;
  parallaxName: string;
  parallaxShow: boolean;
  parallaxSx: number;
  parallaxSy: number;

  bgm: AudioFileParams;
  bgs: AudioFileParams;
  autoplayBgm: boolean;
  autoplayBgs: boolean;

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

export type Map_ImageFiles = Pick<
  Data_Map,
  "battleback1Name" | "battleback2Name" | "parallaxName"
>;
export type Map_Parallax = Pick<
  Data_Map,
  | "parallaxLoopX"
  | "parallaxLoopY"
  | "parallaxShow"
  | "parallaxSx"
  | "parallaxSy"
>;
export type Map_Audios = Pick<
  Data_Map,
  "bgm" | "bgs" | "autoplayBgm" | "autoplayBgs"
>;

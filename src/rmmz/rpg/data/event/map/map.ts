import type {
  EventCommand,
  EventCommandUnknown,
} from "@RpgTypes/rmmz/eventCommand";
import type { AudioFileParams } from "src/libs";
import type { MapEvent } from "./event";
import type { Encounter } from "./types/encounter";
import type { MapEventContainer } from "./types/mapEventContainer";

export interface Data_Map<
  CommandType extends EventCommandUnknown = EventCommand,
> extends MapEventContainer<CommandType> {
  data: number[];
  battleback1Name: string;
  battleback2Name: string;

  parallaxLoopX: boolean;
  parallaxLoopY: boolean;
  parallaxName: string;
  parallaxShow: boolean;
  parallaxSx: number;
  parallaxSy: number;

  x: number;
  y: number;
  width: number;
  height: number;
  note: string;

  displayName: string;
  disableDashing: boolean;

  bgm: AudioFileParams;
  bgs: AudioFileParams;
  autoplayBgm: boolean;
  autoplayBgs: boolean;

  events: Array<MapEvent<CommandType> | null>;
  encounterList: Encounter[];
  tilesetId: number;
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

import type { MoveRouteCommandUnknown, AudioFileParams } from "@RpgTypes/libs";
import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type { Encounter } from "./encounter";
import type { MapEvent, MapEventContainer } from "./event";
import type { Data_MapTiles } from "./tiles";

export type Map_EncounterSoucre = Data_MapTiles & {
  encounterList: Encounter[];
};

export interface Data_MapUnknown<
  CommandType extends EventCommandUnknown = EventCommand,
  MoveRoute extends MoveRouteCommandUnknown = MoveRouteCommandUnknown,
>
  extends MapEventContainer<CommandType>, Map_EncounterSoucre {
  data: number[];
  battleback1Name: string;
  battleback2Name: string;
  specifyBattleback: boolean;

  parallaxLoopX: boolean;
  parallaxLoopY: boolean;
  parallaxName: string;
  parallaxShow: boolean;
  parallaxSx: number;
  parallaxSy: number;

  width: number;
  height: number;
  note: string;

  displayName: string;
  disableDashing: boolean;

  bgm: AudioFileParams;
  bgs: AudioFileParams;
  autoplayBgm: boolean;
  autoplayBgs: boolean;
  scrollType: number;
  tilesetId: number;
  encounterStep: number;
  encounterList: Encounter[];
  events: Array<MapEvent<CommandType, MoveRoute> | null>;
}

export type Map_ImageFiles = Pick<
  Data_MapUnknown,
  "battleback1Name" | "battleback2Name" | "parallaxName"
>;
export type Map_Parallax = Pick<
  Data_MapUnknown,
  | "parallaxLoopX"
  | "parallaxLoopY"
  | "parallaxShow"
  | "parallaxSx"
  | "parallaxSy"
>;
export type Map_Audios = Pick<
  Data_MapUnknown,
  "bgm" | "bgs" | "autoplayBgm" | "autoplayBgs"
>;

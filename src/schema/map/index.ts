import { AudioFileParams } from "../../types/";
import { MapEvent } from "./event";
import { Parallax } from "./parallax";
export * from "./event";

export interface Data_Map extends Parallax {
  events: Array<MapEvent | null>;
  bgm: AudioFileParams;
  bgs: AudioFileParams;
  battleback1Name: string;
  battleback2Name: string;
  parallaxName: string;
}

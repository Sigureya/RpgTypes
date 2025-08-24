import type { PLAY_MOVIE } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_PlayMovie
  extends EventCommandLike2<typeof PLAY_MOVIE> {
  parameters: ParamArray_PlayMovie;
}

export type ParamArray_PlayMovie = [filename: string];

export interface ParamObject_PlayMovie {
  filename: string;
}

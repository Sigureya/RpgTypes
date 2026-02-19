import type { EventCommandLike, PLAY_MOVIE } from "@RpgTypes/libs/eventCommand";

export interface Command_PlayMovie extends EventCommandLike<typeof PLAY_MOVIE> {
  parameters: ParamArray_PlayMovie;
}

export type ParamArray_PlayMovie = [filename: string];

export interface ParamObject_PlayMovie {
  filename: string;
}

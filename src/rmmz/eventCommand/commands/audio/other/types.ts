import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type {
  FADEOUT_BGM,
  FADEOUT_BGS,
  RESUME_BGM,
  SAVE_BGM,
} from "@RpgTypes/rmmz/rpg";

export interface Command_FadeOutBGM
  extends EventCommandLike2<typeof FADEOUT_BGM, [duration: number]> {}

export interface Command_SaveBGM
  extends EventCommandLike2<typeof SAVE_BGM, []> {}

export interface Command_ResumeBGM
  extends EventCommandLike2<typeof RESUME_BGM, []> {}

export interface Command_FadeOutBGS
  extends EventCommandLike2<typeof FADEOUT_BGS> {}

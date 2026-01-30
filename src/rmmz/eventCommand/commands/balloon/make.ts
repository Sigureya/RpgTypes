import type {
  Command_ShowBalloonIcon,
  ParamObject_ShowBalloonIcon,
} from "./types";

export const makeCommandShowBalloonIcon = (
  params: ParamObject_ShowBalloonIcon,
  indent: number = 0,
): Command_ShowBalloonIcon => ({
  code: 213,
  indent,
  parameters: [params.characterId, params.balloonId, params.waiting],
});

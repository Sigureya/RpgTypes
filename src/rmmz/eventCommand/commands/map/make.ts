import type {
  Command_ChangeParallax,
  ParamObject_ChangeParallax,
  Command_ScrollMap,
  ParamObject_ScrollMap,
  Command_HideMapNameDisplay,
  Command_ShowMapNameDisplay,
} from "./types";

export const makeCommandChangeParallax = (
  params: ParamObject_ChangeParallax,
  indent: number = 0,
): Command_ChangeParallax => ({
  code: 284,
  indent,
  parameters: [
    params.parallaxName,
    params.loopX,
    params.loopY,
    params.sx,
    params.sy,
  ],
});

export const makeCommandScrollMap = (
  params: ParamObject_ScrollMap,
  indent: number = 0,
): Command_ScrollMap => ({
  code: 204,
  indent,
  parameters: [params.direction, params.distance, params.speed, params.waiting],
});

export const makeCommandShowMapName = (
  indent: number = 0,
): Command_ShowMapNameDisplay => ({
  code: 281,
  indent,
  parameters: [0],
});

export const makeCommandHideMapName = (
  indent: number = 0,
): Command_HideMapNameDisplay => ({
  code: 281,
  indent,
  parameters: [1],
});

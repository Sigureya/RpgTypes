import type { TitleCommandWindow } from "./types";

export const makeTitleCommandWindow = (
  param: Partial<TitleCommandWindow>
): TitleCommandWindow => {
  return {
    background: param.background ?? 0,
    offsetX: param.offsetX ?? 0,
    offsetY: param.offsetY ?? 0,
  };
};

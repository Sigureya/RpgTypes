import type { StatusParamObject } from "./types";
import type { ParamArray } from "./types";

export const makeParamArray = ({
  mhp = 0,
  mmp = 0,
  atk = 0,
  def = 0,
  mat = 0,
  mdf = 0,
  agi = 0,
  luk = 0,
}: Partial<StatusParamObject>): ParamArray => {
  return [mhp, mmp, atk, def, mat, mdf, agi, luk];
};

export const paramArrayToObject = (
  paramArray: ParamArray
): StatusParamObject => {
  const [mhp, mmp, atk, def, mat, mdf, agi, luk] = paramArray;
  return {
    mhp,
    mmp,
    atk,
    def,
    mat,
    mdf,
    agi,
    luk,
  };
};

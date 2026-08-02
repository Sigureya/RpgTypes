import type { StatusParamObject, Trait } from "@RpgTypes/rmmz";
import { calculateParamRate } from "@RpgTypes/rmmz";

export const calculateBattlerParam = (
  baseParams: StatusParamObject,
  traits: ReadonlyArray<Trait>,
): StatusParamObject => {
  const rate = calculateParamRate(traits);
  return {
    mhp: baseParams.mhp * rate.mhp,
    mmp: baseParams.mmp * rate.mmp,
    atk: baseParams.atk * rate.atk,
    def: baseParams.def * rate.def,
    mat: baseParams.mat * rate.mat,
    mdf: baseParams.mdf * rate.mdf,
    agi: baseParams.agi * rate.agi,
    luk: baseParams.luk * rate.luk,
  };
};

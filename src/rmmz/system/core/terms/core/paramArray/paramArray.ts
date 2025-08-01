import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./types";

export const makeParamNamesArray = (
  param: Partial<SystemLabels_TermsParamNames>
): Terms_ParamNamesArray => {
  return [
    param.mhp ?? "",
    param.mmp ?? "",
    param.atk ?? "",
    param.def ?? "",
    param.mat ?? "",
    param.mdf ?? "",
    param.agi ?? "",
    param.luk ?? "",
    param.hit ?? "",
    param.eva ?? "",
  ];
};

export const makeParamNamesFromArray = (
  array: Terms_ParamNamesArray
): SystemLabels_TermsParamNames => {
  return {
    mhp: array[0],
    mmp: array[1],
    atk: array[2],
    def: array[3],
    mat: array[4],
    mdf: array[5],
    agi: array[6],
    luk: array[7],
    hit: array[8],
    eva: array[9],
  };
};

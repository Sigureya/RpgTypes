import type { Terms_ParamNames, Terms_ParamNamesArray } from "./systemTerms";

export const makeParamNamesArray = (
  param: Partial<Terms_ParamNames>
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

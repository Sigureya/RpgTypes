import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./paramArray";

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

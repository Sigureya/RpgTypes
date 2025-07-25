import type { Data_NamedItem } from "src/namedItemSource";
import type {
  SystemLabels_TermsParamNames,
  Terms_ParamNamesArray,
} from "./core/paramArray/types";
import type { System_Terms_Params } from "./types";

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

export const getParamNames = (
  system: System_Terms_Params
): Data_NamedItem[] => {
  return system.terms.params.map((name, index) => ({
    name: name,
    id: index,
  }));
};

import type { Data_NamedItem } from "src/namedItemSource";
import type { System_ParamNames } from "src/system/subset";
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

export const getParamNames = (system: System_ParamNames): Data_NamedItem[] => {
  return system.terms.params.map((name, index) => ({
    name: name,
    id: index,
  }));
};

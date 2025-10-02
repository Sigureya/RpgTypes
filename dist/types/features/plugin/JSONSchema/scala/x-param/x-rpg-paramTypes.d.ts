import { SourceIdentifier } from '../../../../../libs';
import { NumberParam } from '../../../../../rmmz/plugin/schema/compile';
import { X_ParamData, X_RmmzParam } from './base/x-rpg-param';
export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;

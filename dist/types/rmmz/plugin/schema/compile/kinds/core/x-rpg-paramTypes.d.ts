import { SourceIdentifier } from '../../../../../../libs';
import { X_ParamData, X_RmmzParam } from './paramBase/x-rpg-param';
import { NumberParam } from './primitiveParams';
export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;

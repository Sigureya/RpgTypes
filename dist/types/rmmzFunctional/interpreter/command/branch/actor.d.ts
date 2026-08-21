import { BranchParam_Actor, Provider_RpgData } from '../../../../rmmz';
import { Rmmz_ActorsReadonly, Rmmz_Members } from '../../../../rmmzRuntime';
import { Rmmz_BranchSourceActor } from './types';
export declare const evaluateBranchByActor: (parameters: BranchParam_Actor, party: Rmmz_Members<Rmmz_BranchSourceActor>, actors: Rmmz_ActorsReadonly<Rmmz_BranchSourceActor>, provider: Provider_RpgData) => boolean;

import { BranchParam_Actor } from '../../../../rmmz';
import { Rmmz_Members } from '../../../../rmmzRuntime';
import { Rmmz_BranchSourceActor, Rmmz_BranchSourceProvider } from './types';
export declare const evaluateActorBranch: (parameters: BranchParam_Actor, party: Rmmz_Members<Rmmz_BranchSourceActor>, provider: Rmmz_BranchSourceProvider) => boolean;

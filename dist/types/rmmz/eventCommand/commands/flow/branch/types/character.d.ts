import { Direction8 } from '../../../../../utils';
import { BranchCodeTable } from './branch';
export type BranchParam_Character = [
    branchCode: BranchCodeTable["CHARACTER"],
    characterId: number,
    direction: Direction8
];

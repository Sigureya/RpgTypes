import { BranchCodeTable } from './branch';
export type BranchButtonInputType = 0 | 1 | 2;
export type BranchParam_Button = [
    branchCode: BranchCodeTable["BUTTON"],
    buttonName: string,
    inputType?: BranchButtonInputType
];

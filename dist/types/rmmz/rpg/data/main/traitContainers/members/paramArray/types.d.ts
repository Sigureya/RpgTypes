export type ParamArray = [
    mhp: number,
    mmp: number,
    atk: number,
    def: number,
    mat: number,
    mdf: number,
    agi: number,
    luk: number
];
export type ParamID = keyof ParamArray;
export interface StatusParamObject {
    mhp: number;
    mmp: number;
    atk: number;
    def: number;
    mat: number;
    mdf: number;
    agi: number;
    luk: number;
}

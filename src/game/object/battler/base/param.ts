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
export type ParamId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Param {
  paramMin(paramId: ParamId): number;
  paramMax(paramId: ParamId): number;
}

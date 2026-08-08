export type ParamArray = [
  mhp: number,
  mmp: number,
  atk: number,
  def: number,
  mat: number,
  mdf: number,
  agi: number,
  luk: number,
];

export type ParamID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

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

export interface ExtraParamObject {
  hit: number;
  eva: number;
  cri: number;
  cev: number;
  mev: number;
  mrf: number;
  cnt: number;
  hrg: number;
  mrg: number;
  trg: number;
  tgr: number;
  grd: number;
}

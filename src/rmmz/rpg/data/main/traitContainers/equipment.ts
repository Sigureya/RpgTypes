import type { ParamArray, StatusParamObject } from "./members";
import { makeParamArray } from "./members";
import type { Data_TraitContainer, Trait } from "./trait";

export interface Data_Equipment extends Data_TraitContainer {
  name: string;
  id: number;
  description: string;
  iconIndex: number;
  price: number;
  params: ParamArray;
  traits: Trait[];
  note: string;
  etypeId: number;
}

export const calcEquipParamsArray = (
  equips: ReadonlyArray<Data_Equipment>,
): ParamArray => {
  const obj = calcEquipParamsObject(equips);
  return makeParamArray(obj);
};

export const calcEquipParamsObject = (
  equips: ReadonlyArray<Data_Equipment>,
): StatusParamObject => {
  return equips.reduce<StatusParamObject>(
    (acc: StatusParamObject, equip): StatusParamObject => {
      acc.mhp += equip.params[0];
      acc.mmp += equip.params[1];
      acc.atk += equip.params[2];
      acc.def += equip.params[3];
      acc.mat += equip.params[4];
      acc.mdf += equip.params[5];
      acc.agi += equip.params[6];
      acc.luk += equip.params[7];
      return acc;
    },
    { mhp: 0, mmp: 0, atk: 0, def: 0, mat: 0, mdf: 0, agi: 0, luk: 0 },
  );
};

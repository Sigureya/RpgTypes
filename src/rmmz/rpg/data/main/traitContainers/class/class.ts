import type { ParamID } from "../members";
import type {
  ClassParamGlowing,
  ClassParamGlowTable,
  Data_Class,
  Data_ClassEx,
} from "./types";

export const currentGlowParam = (
  table: ClassParamGlowTable,
  level: number,
  paramId: ParamID,
): number => {
  if (level < 0) {
    return 0;
  }
  const array = table[paramId];
  if (!array) {
    return 0;
  }
  if (level < array.length) {
    return array[level];
  }
  if (level >= array.length) {
    return array[array.length - 1];
  }
  return 0;
};

export const makeClassData = (data: Partial<Data_Class> = {}): Data_Class => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  traits: [],
  note: data.note ?? "",
  params: data.params ?? createEmptyParams(),
  learnings: data.learnings ?? [],
  expParams: data.expParams ?? [],
});

export const makeClassDataEx = (data: Partial<Data_ClassEx>): Data_Class => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  traits: data.traits ?? [],
  note: data.note ?? "",
  params: data.params ? makeParamGlowTable(data.params) : createEmptyParams(),
  learnings: data.learnings ?? [],
  expParams: data.expParams ?? [],
});

const createEmptyParams = (): ClassParamGlowTable => {
  return [[0], [0], [0], [0], [0], [0], [0], [0]];
};
const makeParamGlowTable = (
  list: ReadonlyArray<ClassParamGlowing>,
): ClassParamGlowTable => {
  const atk = list.map((item) => item.atk);
  const def = list.map((item) => item.def);
  const mat = list.map((item) => item.mat);
  const mdf = list.map((item) => item.mdf);
  const agi = list.map((item) => item.agi);
  const luk = list.map((item) => item.luk);
  const mhp = list.map((item) => item.mhp);
  const mmp = list.map((item) => item.mmp);
  return [mhp, mmp, atk, def, mat, mdf, agi, luk];
};

import type {
  Data_Actor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
} from "@RpgTypes/rmmz/rpg";
import { readArrayData } from "./arrayData";
import { FILENAME_ACTORS, FILENAME_CLASSES } from "./constants";
import type { ReadArrayResult, TermsOfReadArrayData } from "./types";

export const readActorData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Actor,
): Promise<ReadArrayResult<Data_Actor>> => {
  return readArrayData(terms, FILENAME_ACTORS, readFileFn, validateFn);
};

export const readClassData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Class,
): Promise<ReadArrayResult<Data_Class>> => {
  return readArrayData(terms, FILENAME_CLASSES, readFileFn, validateFn);
};

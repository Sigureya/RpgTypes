import type { Terms_Basic, Terms_BasicArray } from "./types";

export const makeTermsBasic = (
  terms: Partial<Terms_Basic> = {}
): Terms_BasicArray => {
  return [
    terms.level ?? "Level",
    terms.levelA ?? "Level",
    terms.hp ?? "HP",
    terms.hpA ?? "HP",
    terms.mp ?? "MP",
    terms.mpA ?? "MP",
    terms.tp ?? "TP",
    terms.tpA ?? "TP",
    terms.experience ?? "EXP",
    terms.exp ?? "EXP",
  ];
};

export const makeTermsBasicFromArray = (
  array: Terms_BasicArray
): Terms_Basic => {
  return {
    level: array[0],
    levelA: array[1],
    hp: array[2],
    hpA: array[3],
    mp: array[4],
    mpA: array[5],
    tp: array[6],
    tpA: array[7],
    experience: array[8],
    exp: array[9],
  };
};

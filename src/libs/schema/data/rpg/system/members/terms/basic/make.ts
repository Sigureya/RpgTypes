import type { Terms_Basic, Terms_BasicArray } from "./types";

export const makeTermsBasic = (
  terms: Partial<Terms_Basic>
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

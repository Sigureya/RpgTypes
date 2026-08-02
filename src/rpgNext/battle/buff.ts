import type { BuffItem } from "./types";

export const cloneBuffItem = (buff: BuffItem): BuffItem => {
  return {
    startTurn: buff.startTurn,
    paramId: buff.paramId,
    sourceBattlerId: buff.sourceBattlerId,
    value: buff.value,
  };
};

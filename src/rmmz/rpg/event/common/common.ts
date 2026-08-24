import type { Data_CommonEventUnknown } from "./types";

export const isParallelCommonEvent = (
  commonEvent: Data_CommonEventUnknown | null,
): boolean => {
  if (!commonEvent) {
    return false;
  }
  return commonEvent.trigger === 2;
};

export const isAutorunCommonEvent = (
  commonEvent: Data_CommonEventUnknown | null,
): boolean => {
  if (!commonEvent) {
    return false;
  }
  return commonEvent.trigger === 1;
};

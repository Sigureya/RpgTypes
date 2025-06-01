import type { MapEvent_PageCondition, PageConditionArg } from "./condition";

export const makeEventPageCondition = (
  arg: Partial<PageConditionArg> = {}
): MapEvent_PageCondition => {
  return {
    switch1Id: arg.switch1Id ?? 0,
    switch1Valid: arg.switch1Id !== undefined,
    switch2Id: arg.switch2Id ?? 0,
    switch2Valid: arg.switch2Id !== undefined,
    variableId: arg.variableId ?? 0,
    variableValid: arg.variableId !== undefined,
    variableValue: arg.variableValue ?? 0,
    selfSwitchCh: arg.selfSwitchCh ?? "A",
    selfSwitchValid: arg.selfSwitchCh !== undefined,
    itemId: arg.itemId ?? 0,
    itemValid: arg.itemId !== undefined,
    actorId: arg.actorId ?? 0,
    actorValid: arg.actorId !== undefined,
  };
};

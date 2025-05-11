import type { MapEvent_PageCondition, PageConditionArg } from "./condition";
import type { MapEvent } from "./mapEvent";
import type { MapEvent_Image, MapEventPage } from "./page";

export const makeMapEvent = (): MapEvent => {
  return {
    id: 1,
    name: "",
    pages: [],
    note: "",
    x: 0,
    y: 0,
  };
};

export const makeMapEventIamge = (): MapEvent_Image => {
  return {
    characterIndex: 0,
    characterName: "",
    direction: 2,
    pattern: 0,
    tileId: 0,
  };
};

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

export const makeMapEventPage = (): MapEventPage => {
  return {
    conditions: makeEventPageCondition(),
    list: [],
    directionFix: false,
    image: makeMapEventIamge(),
    moveFrequency: 5,
    moveRoute: {
      list: [],
      repeat: false,
      skippable: false,
      wait: false,
    },
  };
};

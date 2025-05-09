import type { MapEvent_PageCondition } from "./condition";
import { DIRECTION } from "./eventCommand";
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
    direction: DIRECTION.DOWN,
    pattern: 0,
    tileId: 0,
  };
};

export const makeEventPageCondition = (): MapEvent_PageCondition => {
  return {
    actorId: 1,
    itemId: 1,
    selfSwitchCh: "A",
    selfSwitchValid: false,
    switch1Id: 1,
    switch2Id: 1,
    variableId: 1,
    variableValue: 0,
    actorValid: false,
    itemValid: false,
    switch1Valid: false,
    switch2Valid: false,
    variableValid: false,
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

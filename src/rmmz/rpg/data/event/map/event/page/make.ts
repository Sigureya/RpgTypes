import { makeEventPageCondition } from "./condition";
import type { MapEvent_Image } from "./image/types";
import type { MapEvent } from "./mapEvent";
import type { MapEventPage } from "./page";

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

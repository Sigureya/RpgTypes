import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { MoveRouteCommandUnknown } from "@RpgTypes/rmmz/eventCommand";
import { makeEventPageCondition } from "./condition";
import type { MapEvent_Image } from "./image/types";
import type { MapEvent } from "./mapEvent";
import type { MapEventPage } from "./page";

export const makeMapEvent = <
  Command extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>({
  id = 1,
  name = "",
  pages = [],
  note = "",
  x = 0,
  y = 0,
}: Partial<MapEvent<Command, MoveRoute>> = {}): MapEvent<
  Command,
  MoveRoute
> => {
  return {
    id: id,
    name: name,
    pages: pages,
    note: note,
    x: x,
    y: y,
  };
};

export const makeMapEventIamge = ({
  characterIndex = 0,
  characterName = "",
  direction = 2,
  pattern = 0,
  tileId = 0,
}: Partial<MapEvent_Image> = {}): MapEvent_Image => {
  return {
    characterIndex: characterIndex,
    characterName: characterName,
    direction: direction,
    pattern: pattern,
    tileId: tileId,
  };
};

export const makeMapEventPage = <
  Command extends EventCommandUnknown,
  M extends MoveRouteCommandUnknown,
>({
  list = [],
  conditions = makeEventPageCondition(),
  image = makeMapEventIamge(),
  moveFrequency = 5,
  directionFix = false,
  moveRoute = {
    list: [],
    repeat: false,
    skippable: false,
    wait: false,
  },
  priorityType = 1,
  stepAnime = false,
  through = false,
  walkAnime = false,
  moveSpeed = 3,
  moveType = 0,
  trigger = 0,
}: Partial<MapEventPage<Command, M>> = {}): MapEventPage<Command, M> => {
  return {
    walkAnime: walkAnime,
    stepAnime: stepAnime,
    through: through,
    conditions: conditions,
    list: list,
    directionFix: directionFix,
    image: image,
    priorityType: priorityType,
    moveFrequency: moveFrequency,
    moveSpeed: moveSpeed,
    moveType: moveType,
    trigger: trigger,
    moveRoute: {
      list: moveRoute.list,
      repeat: moveRoute.repeat,
      skippable: moveRoute.skippable,
      wait: moveRoute.wait,
    },
  };
};

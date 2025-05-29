import type { GlobalLabel } from "@RpgTypes/schema/labelUtils";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./constants";
import type { CollapsOptionLabels } from "./labels";
import type { Data_NamedItem2 } from "@RpgTypes/schema/namedItemSource";

export const foldCollapsOptions = (
  options: CollapsOptionLabels,
  global: Pick<GlobalLabel, "normal">
): Data_NamedItem2[] => {
  return [
    {
      id: COLLAPS_NORMAL,
      name: global.normal,
    },
    {
      id: COLLAPS_BOSS,
      name: options.bossCollaps,
    },
    {
      id: COLLAPS_INSTANT,
      name: options.instantCollaps,
    },
    {
      id: COLLAPS_NONE,
      name: options.noneCollaps,
    },
  ];
};

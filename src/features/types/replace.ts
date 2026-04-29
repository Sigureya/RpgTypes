import type { RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePair } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";

export interface XXX {
  basicData: RawGameData<NormalizedEventCommand>;
  adtionalData: YYY;
}

export interface YYY {
  actorTextDictionary: KeyValuePair[];
}

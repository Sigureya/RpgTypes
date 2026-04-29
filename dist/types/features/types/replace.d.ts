import { RawGameData } from '../../fileio';
import { KeyValuePair } from '../../libs';
import { NormalizedEventCommand } from '../../rmmz';
export interface XXX {
    basicData: RawGameData<NormalizedEventCommand>;
    adtionalData: YYY;
}
export interface YYY {
    actorTextDictionary: KeyValuePair[];
}

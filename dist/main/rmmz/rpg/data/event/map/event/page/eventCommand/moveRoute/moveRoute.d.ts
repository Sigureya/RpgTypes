import { AudioFileParams } from '../../../../../../../../../libs/utils';
export interface MoveRouteCommandUnknown {
    code: number;
    parameters: (string | number | AudioFileParams)[];
}
export interface MoveRouteDataUnkwnown {
    wait: boolean;
    repeat: boolean;
    skippable: boolean;
    list: MoveRouteCommandUnknown[];
}

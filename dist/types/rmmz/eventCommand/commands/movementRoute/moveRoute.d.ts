import { AudioFileParams } from 'src/libs/utils';
export interface MoveRouteCommandUnknown {
    code: number;
    parameters?: (string | number | AudioFileParams)[];
}
export interface MoveRouteData<T extends MoveRouteCommandUnknown = MoveRouteCommandUnknown> {
    wait: boolean;
    repeat: boolean;
    skippable: boolean;
    list: T[];
}
export type MoveRouteDataUnkwnown = MoveRouteData<MoveRouteCommandUnknown>;

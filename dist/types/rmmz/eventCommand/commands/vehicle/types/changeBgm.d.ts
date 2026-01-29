import { AudioFileParams } from '../../../../../libs';
import { EventCommandLike } from '../../../frame';
import { CHANGE_VEHICLE_BGM } from '../../../../rpg';
import { VehicleType } from './constants';
export interface Command_ChangeVehicleBGM extends EventCommandLike<typeof CHANGE_VEHICLE_BGM> {
    parameters: ParamArray_ChangeVehicleBGM;
}
export type ParamArray_ChangeVehicleBGM = [
    vheicleId: VehicleType,
    bgm: AudioFileParams
];
export interface ParamObject_ChangeVehicleBGM {
    vheicleId: VehicleType;
    bgm: AudioFileParams;
}

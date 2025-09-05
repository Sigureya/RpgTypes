import { EventCommandLike } from '../../../frame';
import { CHANGE_VEHICLE_BGM } from '../../../../rpg';
export interface Command_ChangeVehicleBGM extends EventCommandLike<typeof CHANGE_VEHICLE_BGM> {
    parameters: ParamArray_ChangeVehicleBGM;
}
export type ParamArray_ChangeVehicleBGM = [];

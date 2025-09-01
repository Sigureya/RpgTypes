import { EventCommandLike2 } from '../../../frame';
import { CHANGE_VEHICLE_BGM } from '../../../../rpg';
export interface Command_ChangeVehicleBGM extends EventCommandLike2<typeof CHANGE_VEHICLE_BGM> {
    parameters: ParamArray_ChangeVehicleBGM;
}
export type ParamArray_ChangeVehicleBGM = [];

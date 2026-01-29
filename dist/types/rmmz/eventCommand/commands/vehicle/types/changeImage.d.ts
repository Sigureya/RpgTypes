import { EventCommandLike } from '../../../frame';
import { CHANGE_VEHICLE_IMAGE } from '../../../../rpg';
import { VehicleType } from './constants';
export interface Command_ChangeVehicleImage extends EventCommandLike<typeof CHANGE_VEHICLE_IMAGE> {
    parameters: ParamArray_ChangeVehicleImage;
}
export type ParamArray_ChangeVehicleImage = [
    vehicleId: VehicleType,
    characterImage: string,
    characterIndex: number
];
export interface ParamObject_ChangeVehicleImage {
    vehicleId: VehicleType;
    characterImage: string;
    characterIndex: number;
}

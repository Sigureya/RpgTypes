import { EventCommandLike, CHANGE_VEHICLE_IMAGE } from '../../../../../libs/eventCommand';
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

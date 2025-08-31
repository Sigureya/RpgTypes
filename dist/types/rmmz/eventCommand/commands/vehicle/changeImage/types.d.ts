import { EventCommandLike2 } from '../../../frame';
import { CHANGE_VEHICLE_IMAGE } from '../../../../rpg';
export interface Command_ChangeVehicleImage extends EventCommandLike2<typeof CHANGE_VEHICLE_IMAGE> {
    parameters: ParamArray_ChangeVehicleImage;
}
export type ParamArray_ChangeVehicleImage = [
    vehicleId: number,
    characterImage: string,
    characterIndex: number
];

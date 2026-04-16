import { ImageFolders } from '../../../../fileIO/image';
import { Data_System, Data_Vehicle } from '../../../../rmmz/system';
export interface ExtractedSystemImage {
    folder: ImageFolders;
    key: string;
    image: string;
}
type Vehicle = Pick<Data_Vehicle, "characterName">;
interface SystemVehicles {
    boat: Vehicle;
    ship: Vehicle;
    airship: Vehicle;
}
export declare const extractImageFromSystem: (system: Pick<Data_System, "title1Name" | "title2Name"> & SystemVehicles) => ExtractedSystemImage[];
export {};

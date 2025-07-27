import { Data_System, Data_Vehicle, ImageFolders } from '../../../rmmz';
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

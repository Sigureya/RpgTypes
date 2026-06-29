import type { ImageFolders } from "@RpgTypes/fileio";
import type { Data_System, Data_Vehicle } from "@RpgTypes/rmmz/system";

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

const vehicle = (
  system: SystemVehicles,
  key: keyof SystemVehicles,
): ExtractedSystemImage => {
  return {
    folder: "characters",
    key,
    image: system[key].characterName,
  };
};

export const extractImageFromSystem = (
  system: Pick<Data_System, "title1Name" | "title2Name"> & SystemVehicles,
): ExtractedSystemImage[] => {
  return [
    {
      key: "title1Name",
      image: system.title1Name,
      folder: "titles1",
    },
    {
      key: "title2Name",
      image: system.title2Name,
      folder: "titles2",
    },
    vehicle(system, "boat"),
    vehicle(system, "ship"),
    vehicle(system, "airship"),
  ];
};

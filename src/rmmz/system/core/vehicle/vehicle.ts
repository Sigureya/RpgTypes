import { makeAudioFileParams } from "@RpgTypes/libs/utils";
import type { Data_Vehicle } from "./types";

export const makeVehicleData = (
  vehicle: Partial<Data_Vehicle> = {}
): Data_Vehicle => ({
  characterIndex: vehicle.characterIndex ?? 0,
  characterName: vehicle.characterName ?? "",
  bgm: makeAudioFileParams(vehicle.bgm ?? {}),
  startMapId: vehicle.startMapId ?? 0,
  startX: vehicle.startX ?? 0,
  startY: vehicle.startY ?? 0,
});

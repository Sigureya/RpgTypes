import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_VEHICLE_IMAGE } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeVehicleImage
  extends EventCommandLike2<typeof CHANGE_VEHICLE_IMAGE> {
  parameters: [
    vehicleId: number,
    characterImage: string,
    characterIndex: number
  ];
}

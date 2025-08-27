import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation } from "@RpgTypes/rmmz/rpg";

export interface Command_SetVehicleLocation extends EventCommandLike2<202> {
  parameters: [
    vehicleId: number,
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number
  ];
}

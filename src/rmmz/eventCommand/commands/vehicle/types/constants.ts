export const VEHICLE_BOAT = 0 as const;
export const VEHICLE_SHIP = 1 as const;
export const VEHICLE_AIRSHIP = 2 as const;

export type VehicleType =
  | typeof VEHICLE_BOAT
  | typeof VEHICLE_SHIP
  | typeof VEHICLE_AIRSHIP;

import type { Data_System } from "./system";

export type System_Text = Pick<Data_System, "gameTitle" | "currencyUnit">;

export type System_Debug = Pick<
  Data_System,
  "battlerHue" | "battlerName" | "editMapId"
>;

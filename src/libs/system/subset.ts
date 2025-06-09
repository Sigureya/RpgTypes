import type { Data_System } from "./system";

export type System_Pick<
  K1 extends keyof Data_System,
  K2 extends keyof Data_System[K1]
> = {
  [key in K1]: Pick<Data_System[K1], K2>;
};

export type System_ParamNames = System_Pick<"terms", "params">;

export type System_Images = Pick<
  Data_System,
  | "battleback1Name"
  | "battleback2Name"
  | "battlerName"
  | "title1Name"
  | "title2Name"
>;

export type System_Text = Pick<Data_System, "gameTitle" | "currencyUnit">;

export type System_Vehicle = Pick<Data_System, "boat" | "ship" | "airship">;

export type System_Bgm = Pick<Data_System, "titleBgm" | "battleBgm">;

export type System_Me = Pick<
  Data_System,
  "gameoverMe" | "defeatMe" | "victoryMe"
>;

export type System_AudioFiles = System_Bgm & System_Me;

export type System_Debug = Pick<
  Data_System,
  "battlerHue" | "battlerName" | "testBattlers" | "testTroopId" | "editMapId"
>;

export type System_ImageSize = Pick<
  Data_System,
  "tileSize" | "faceSize" | "iconSize"
>;

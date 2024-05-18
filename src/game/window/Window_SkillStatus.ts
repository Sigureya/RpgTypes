import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { Window_StatusBase } from "./src";

export declare class Window_SkillStatus extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  refresh(): void;
}
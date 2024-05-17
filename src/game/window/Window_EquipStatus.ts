import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { ParamId } from "../object/battler/base/param";
import { Window_StatusBase } from "./src";

export declare class Window_EquipStatus extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  colSpacing(): void;

  refresh(): void;

  setTempActor(tempActor: Game_Actor): void;

  drawAllParams(): void;

  drawItem(x: number, y: number, paramId: ParamId): void;

  drawParamName(x: number, y: number, paramId: ParamId): string;

  drawCurrentParam(x: number, y: number, paramId: ParamId): void;

  drawRightArrow(x: number, y: number): void;

  drawNewParam(x: number, y: number, paramId: ParamId): void;

  rightArrowWidth(): number;

  paramWidth(): number;

  paramX(): number;

  paramY(index: number): void;
}

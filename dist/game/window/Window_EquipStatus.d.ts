import type { Game_Actor } from "../object";
import type { ParamID } from "../../schema";
import type { Window_StatusBase } from "./Window_StatusBase";
export declare class Window_EquipStatus extends Window_StatusBase {
    setActor(actor: Game_Actor): void;
    colSpacing(): number;
    refresh(): void;
    setTempActor(tempActor: Game_Actor): void;
    drawAllParams(): void;
    drawParamName(x: number, y: number, paramId: ParamID): string;
    drawCurrentParam(x: number, y: number, paramId: ParamID): void;
    drawRightArrow(x: number, y: number): void;
    drawNewParam(x: number, y: number, paramId: ParamID): void;
    rightArrowWidth(): number;
    paramWidth(): number;
    paramX(): number;
    paramY(index: number): void;
}

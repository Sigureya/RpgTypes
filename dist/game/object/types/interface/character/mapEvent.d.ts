import type { EventCommand } from "../../../../../schema";
import type { IDisplayableCharacter } from "./displayable";
import type { MoveRouteCommand } from "./moveRouteCommand";
export interface IMapEvent extends IDisplayableCharacter {
    update(): void;
    isStarting(): boolean;
    unlock(): void;
    clearStartingFlag(): void;
    eventId(): number;
    list(): EventCommand[];
    isMoveRouteForcing(): boolean;
    isAnimationPlaying(): boolean;
    isBalloonPlaying(): boolean;
    forceMoveRoute(route: MoveRouteCommand[]): void;
    pos(x: number, y: number): boolean;
    posNt(x: number, y: number): boolean;
    x: number;
    y: number;
}

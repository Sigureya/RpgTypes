import type { Game_Actor } from "./Game_Actor";
export declare class Game_Actors {
    _data: Game_Actor[];
    constructor();
    initialize(): void;
    actor(actorId: number): Game_Actor | null;
}

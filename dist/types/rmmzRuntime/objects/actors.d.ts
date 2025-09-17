import { Rmmz_Actor, Rmmz_Actors } from './core';
export declare class Game_Actors implements Rmmz_Actors {
    _data: [null, ...Rmmz_Actor[]];
    initialize(): void;
    actor(actorId: number): Rmmz_Actor | null;
}

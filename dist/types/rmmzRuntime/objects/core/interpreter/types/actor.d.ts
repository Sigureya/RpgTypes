import { Data_Actor, Data_Enemy } from '../../../../../rmmz/rpg';
export interface Rmmz_InterpreterBattler<Actor extends Data_Actor, Enemy extends Data_Enemy> {
    iterateActorId(actorId: number, callBack: (actor: Actor) => void): void;
    iterateActorEx(mode: number, dataId: number, callBack: (actor: Actor) => void): void;
}

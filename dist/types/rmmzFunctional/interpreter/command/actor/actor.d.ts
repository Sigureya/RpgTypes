import { Command_ChangeActorImages, Command_ChangeClaass } from '../../../../rmmz/eventCommand';
import { Rmmz_Actor, Rmmz_ActorsReadonly, Rmmz_PlayerCharactor } from '../../../../rmmzRuntime';
export declare const commandChangeActorClass: (command: Command_ChangeClaass, provider: Rmmz_ActorsReadonly<Rmmz_Actor>) => boolean;
export declare const commandChangeActorImages: ({ parameters }: Command_ChangeActorImages, provider: Rmmz_ActorsReadonly<Rmmz_Actor>, gamePlayer: Rmmz_PlayerCharactor) => boolean;

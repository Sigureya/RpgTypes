import { Command_ChangeActorImages, Command_ChangeClaass } from '../../../../rmmz/eventCommand';
import { Provider_Target, Rmmz_Actor, Rmmz_PlayerCharactor } from '../../../../rmmzRuntime';
export declare const commandChangeActorClass: (command: Command_ChangeClaass, provider: Provider_Target<Rmmz_Actor>) => boolean;
export declare const commandChangeActorImages: ({ parameters }: Command_ChangeActorImages, provider: Provider_Target<Rmmz_Actor>, gamePlayer: Rmmz_PlayerCharactor) => boolean;

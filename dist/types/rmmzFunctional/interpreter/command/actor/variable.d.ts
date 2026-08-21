import { Command_ChangeActorHP, Command_ChangeActorLevel, Command_ChangeActorMP, Command_ChangeActorTP, Command_ChangeExp } from '../../../../rmmz/eventCommand';
import { Rmmz_Actor, Rmmz_Actors, Rmmz_ActorsReadonly, Rmmz_BattlerContainer_Readonly, Rmmz_Variables } from '../../../../rmmzRuntime';
export declare const commandChangeActorHp: (command: Command_ChangeActorHP, provider: Rmmz_ActorsReadonly<Rmmz_Actor>, party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>, variables: Rmmz_Variables) => boolean;
export declare const commandChangeActorMp: (command: Command_ChangeActorMP, provider: Rmmz_Actors, party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>, variables: Rmmz_Variables) => boolean;
export declare const commandChangeActorTp: (command: Command_ChangeActorTP, provider: Rmmz_Actors, party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>, variables: Rmmz_Variables) => boolean;
export declare const commandChangeActorExp: (command: Command_ChangeExp, provider: Rmmz_ActorsReadonly<Rmmz_Actor>, party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>, variables: Rmmz_Variables) => boolean;
export declare const commandChangeActorLevel: (command: Command_ChangeActorLevel, provider: Rmmz_ActorsReadonly<Rmmz_Actor>, party: Rmmz_BattlerContainer_Readonly<Rmmz_Actor>, variables: Rmmz_Variables) => boolean;

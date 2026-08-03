import { Command_ChangeActorHP, Command_ChangeActorLevel, Command_ChangeActorMP, Command_ChangeActorTP, Command_ChangeExp } from '../../../../rmmz/eventCommand';
import { Provider_Target, Rmmz_Actor, Rmmz_Variables } from '../../../../rmmzRuntime';
export declare const commandChangeActorHp: (command: Command_ChangeActorHP, provider: Provider_Target<Rmmz_Actor>, variables: Rmmz_Variables) => void;
export declare const commandChangeActorMp: (command: Command_ChangeActorMP, provider: Provider_Target<Rmmz_Actor>, variables: Rmmz_Variables) => void;
export declare const commandChangeActorTp: (command: Command_ChangeActorTP, provider: Provider_Target<Rmmz_Actor>, variables: Rmmz_Variables) => void;
export declare const commandChangeActorExp: (command: Command_ChangeExp, provider: Provider_Target<Rmmz_Actor>, variables: Rmmz_Variables) => void;
export declare const commandChangeActorLevel: (command: Command_ChangeActorLevel, provider: Provider_Target<Rmmz_Actor>, variables: Rmmz_Variables) => void;

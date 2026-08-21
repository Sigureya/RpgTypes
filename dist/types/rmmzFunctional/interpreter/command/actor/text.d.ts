import { Command_ChangeActorName, Command_ChangeActorNickName, Command_ChangeActorProfile } from '../../../../rmmz/eventCommand';
import { Rmmz_Actors } from '../../../../rmmzRuntime';
export declare const commandChangeActorName: ({ parameters }: Command_ChangeActorName, provider: Rmmz_Actors) => boolean;
export declare const commandChangeActorNickName: (command: Command_ChangeActorNickName, provider: Rmmz_Actors) => boolean;
export declare const commandChangeActorProfile: (command: Command_ChangeActorProfile, provider: Rmmz_Actors) => boolean;

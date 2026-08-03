import { Command_ChangeActorName, Command_ChangeActorNickName, Command_ChangeActorProfile } from '../../../../rmmz/eventCommand';
import { Provider_Target, Rmmz_Actor } from '../../../../rmmzRuntime';
export declare const commandChangeActorName: ({ parameters }: Command_ChangeActorName, provider: Provider_Target<Rmmz_Actor>) => boolean;
export declare const commandChangeActorNickName: (command: Command_ChangeActorNickName, provider: Provider_Target<Rmmz_Actor>) => boolean;
export declare const commandChangeActorProfile: (command: Command_ChangeActorProfile, provider: Provider_Target<Rmmz_Actor>) => boolean;

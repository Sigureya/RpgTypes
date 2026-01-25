import { Command_ChangeActorName, Command_ChangeActorProfile } from '../../../../../../rmmz';
export declare const isActorTextCommand: (data: unknown) => data is Command_ChangeActorName | Command_ChangeActorProfile | Command_ChangeActorName;

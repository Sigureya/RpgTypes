import { Command_ShowMessageBody, Command_ShowMessageHeader, EventCommand } from '../../../../rmmz';
import { SimpleEventCommandGroup } from './core/simple';
export interface ResultXX<Command extends EventCommand> {
    spekerCommand: Command;
    messaege: string;
}
export declare const insertSpeakerCommand: <Command extends EventCommand>(commandGroup: SimpleEventCommandGroup<Command_ShowMessageHeader, Command_ShowMessageBody>, fn: (text: string) => ResultXX<Command> | undefined) => EventCommand[];

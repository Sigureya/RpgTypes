import { Command_ShowChoices, Command_ShowChoiceWhen } from '../../../../rmmz/eventCommand';
import { Rmmz_Message } from '../../../../rmmzRuntime';
export declare const setupChoice: (command: Command_ShowChoices, message: Rmmz_Message) => Rmmz_Message;
export declare const needsSkipByChoiceWhen: (command: Command_ShowChoiceWhen, indent: number) => boolean;
export declare const needsSkipByWhenCancel: (value: number) => boolean;

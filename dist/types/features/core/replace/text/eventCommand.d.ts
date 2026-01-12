import { EventCommand } from '../../../../rmmz';
export declare const replaceEventCommandTexts: (command: EventCommand, fn: (key: string) => string | undefined) => EventCommand;

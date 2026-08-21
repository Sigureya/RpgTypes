import { EventCommand } from './union';
import { Command_ShowMessageBody, Command_ShowMessageHeader } from './message';
export type MessageCommandGroupV2 = EventCommandGroupV2<Command_ShowMessageHeader, Command_ShowMessageBody>;
export interface EventCommandGroupV2<Head extends EventCommand, Body extends EventCommand> {
    header: Head;
    bodies: Body[];
}
export declare const joinMsgXX: (group: MessageCommandGroupV2) => [head: Command_ShowMessageHeader, body: Command_ShowMessageBody];
export declare const groupByMessageCommands: (list: ReadonlyArray<EventCommand>, index: number) => null | MessageCommandGroupV2;

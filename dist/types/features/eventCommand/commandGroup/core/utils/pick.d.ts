import { EventCommand, ExtractCommandByParam } from '../../../../../rmmz';
export declare const pickCommands: <Head extends EventCommand, Body extends ExtractCommandByParam<[string]>>(array: ReadonlyArray<EventCommand>, index: number, headFn: (data: EventCommand) => data is Head, bodyFn: (data: EventCommand) => data is Body) => {
    header: Head;
    bodies: Body[];
};

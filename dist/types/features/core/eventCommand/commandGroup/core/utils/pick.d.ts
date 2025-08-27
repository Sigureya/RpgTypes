import { EventCommand, ExtractCommandByParam } from '../../../../../../rmmz/eventCommand';
export declare const pickCommands: <Head extends EventCommand, Body extends ExtractCommandByParam<[string], EventCommand>>(array: ReadonlyArray<EventCommand>, index: number, headFn: (data: EventCommand) => data is Head, bodyFn: (data: EventCommand) => data is Body) => {
    header: Head;
    bodies: Body[];
};

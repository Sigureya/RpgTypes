import { EventCommandUnknown } from '../../../../libs/eventCommand';
import { BattleEventPage, Data_CommonEventUnknown, Data_TroopUnknonw, MapEventContainer } from '../../../../rmmz';
import { MapEventContext } from './types';
interface EventContainer<Command> {
    id: number;
    pages: {
        list: Command[];
    }[];
}
/**
 * Creates a MapEventContext for an event command.
 * @param commands The event commands.
 * @param eventId The ID of the event.
 * @param pageIndex The index of the page containing the command.
 * @returns A MapEventContext object.
 */
export declare const createEventContext: <T>(commands: T, eventId: number, pageIndex: number) => MapEventContext<T>;
/**
 * Maps each event command to a MapEventContext.
 * @param page The page containing the event commands.
 * @param pageIndex The index of the page.
 * @param event The event metadata (contains ID).
 * @returns An array of MapEventContext objects.
 */
export declare const createCommandContext: <Command>(page: {
    list: ReadonlyArray<Command>;
}, pageIndex: number, event: {
    id: number;
}) => MapEventContext<Command>[];
/**
 * Processes all pages within a container and applies a function to each page.
 * @param container The container holding multiple event pages.
 * @param func The function to apply to each page.
 * @returns An array of results obtained by applying the function to each page.
 */
export declare const processEventPages: <Result, PageContainer extends {
    readonly pages: ReadonlyArray<unknown>;
}>(container: PageContainer, func: (page: PageContainer["pages"][number], pageIndex: number, container: PageContainer) => Result) => Result[];
/**
 * Processes all events in a map and applies a function to their pages.
 * @param map The map containing multiple events.
 * @param fn The function to apply to each event page.
 * @returns A 2D array where each element represents the processed result of an event's pages.
 */
export declare const processMapEvents: <Result, Command, Event extends object>(map: MapEventContainer<Command, Event & EventContainer<Command>>, fn: (page: NonNullable<(typeof map)["events"][number]>["pages"][number], pageIndex: number, container: NonNullable<Event & {
    id: number;
    pages: {
        list: Command[];
    }[];
}>) => Result) => Result[][];
export declare const collectMapEvents: <Result, Command, Event extends {
    id: number;
}>(map: MapEventContainer<Command, Event & EventContainer<Command>>, fn: (page: NonNullable<(typeof map)["events"][number]>["pages"][number], pageIndex: number, container: NonNullable<(typeof map)["events"][number]>) => Result) => Result[];
/**
 * Processes all troop event pages.
 * @param list The list of troop events.
 * @param func The function to apply to each event page.
 * @returns A 2D array where each element represents the processed result of a troop's pages.
 */
export declare const processTroopEvents: <Result, Command>(list: ReadonlyArray<Data_TroopUnknonw<Command>>, func: (page: BattleEventPage<Command>, pageIndex: number, container: Data_TroopUnknonw<Command>) => Result) => Result[][];
export declare const correctTroopEvents: <Result, Command>(list: ReadonlyArray<Data_TroopUnknonw<Command>>, func: (page: BattleEventPage<Command>, pageIndex: number, container: Data_TroopUnknonw<Command>) => Result) => Result[];
/**
 * Processes all common events.
 * @param events The list of common events.
 * @param func The function to apply to each common event.
 * @returns An array of processed common events.
 */
export declare const processCommonEvents: <T, Command extends EventCommandUnknown>(events: ReadonlyArray<Data_CommonEventUnknown<Command>>, func: (common: Readonly<Data_CommonEventUnknown<Command>>, index: number, common2: Readonly<Data_CommonEventUnknown<Command>>) => T) => T[];
/**
 * Gathers all event command contexts from a map.
 * @param map The map containing events.
 * @returns A flattened array of MapEventContext objects representing all event commands in the map.
 */
export declare const gatherEventCommandContext: <Command, Event extends EventContainer<Command> = EventContainer<Command>>(map: MapEventContainer<Command, Event>) => MapEventContext<Command>[];
export {};

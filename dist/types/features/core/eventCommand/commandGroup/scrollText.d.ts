import { EventCommand } from '../../../../rmmz';
import { SimpleEventCommandGroup } from './core';
export declare const extractScrollTextGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: import('../../../../rmmz').Command_ScrollTextHeader;
    bodies: import('../../../../rmmz').Command_ScrollTextBody[];
};
export declare const createScrollTextGroup: (list: ReadonlyArray<EventCommand>, index: number) => SimpleEventCommandGroup<import('../../../../rmmz').Command_ScrollTextHeader, import('../../../../rmmz').Command_ScrollTextBody>;

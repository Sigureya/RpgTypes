import { EventCommandGroup } from './types';
import { TextCommandBody } from './utils/textCommandBody';
export declare class CombinedEventCommandGroup<Header extends TextCommandBody, Body extends TextCommandBody> implements EventCommandGroup<Header, Body> {
    readonly header: Header;
    readonly bodies: Body[];
    constructor(header: Header, bodies: Body[]);
    getBodyText(): string;
    mergedBody(): Header;
    joinCommandBodies(): [Header, ...Body[]];
    normalizedCommands(): [Header];
}

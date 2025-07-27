import { EventCommand } from '../../../../rmmz';
import { EventCommandGroup, TextCommandBody } from './types';
export declare class SimpleEventCommandGroup<Header extends EventCommand, Body extends TextCommandBody> implements EventCommandGroup<Header, Body> {
    readonly bodyCode: Body["code"];
    readonly header: Header;
    readonly bodies: Body[];
    constructor(bodyCode: Body["code"], header: Header, bodies: Body[]);
    normalizedCommands(): [Header, Body] | [Header];
    getBodyText(): string;
    joinCommandBodies(): Body[];
    mergedBody(): Body;
}

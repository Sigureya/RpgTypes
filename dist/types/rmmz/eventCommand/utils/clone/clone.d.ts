import { EventCommandLike, EventCommandUnknown } from '../../../../libs/eventCommand';
export declare const cloneParameters: <Param extends ReadonlyArray<number | boolean | string>>(param: Param) => Param;
export declare const cloneEventCommand: <Param extends Array<number | boolean | string>>(command: EventCommandLike<number, Param>) => {
    code: number;
    indent: number;
    parameters: Param;
};
export declare const isCloneableCommand: (value: EventCommandUnknown) => value is EventCommandLike<number, (string | number | boolean)[]>;

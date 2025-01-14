import type { EventCommandTable } from "./data/types/map";
export declare const createCommand: <T extends keyof EventCommandTable>(code: T, parameters: EventCommandTable[T]["parameters"], indent?: number) => {
    code: T;
    indent: number;
    parameters: EventCommandTable[T]["parameters"];
};

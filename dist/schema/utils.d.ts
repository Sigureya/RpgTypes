import type { EventCommandTable } from "./data";
export declare const createCommand: <T extends keyof EventCommandTable>(code: T, parameters: EventCommandTable[T]["parameters"], indent?: number) => {
    code: T;
    indent: number;
    parameters: EventCommandTable;
};

import type { DataTypesTable } from "./dataTypesTable";
export type DataName<T> = {
    [K in keyof DataTypesTable]: T extends DataTypesTable[K] ? K : never;
}[keyof DataTypesTable];

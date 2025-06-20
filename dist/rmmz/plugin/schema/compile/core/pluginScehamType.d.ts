import { KindOfBoolean, KindOfStructRef } from './kinds/kinds';
import { KindOfStruct, StructParam } from './kinds/plugin';
export type PluginSchemaType<T, path extends string = "", KnowTypes = never> = T extends null ? {
    kind: "null is Forbidden";
    default?: null;
} : T extends undefined ? {
    kind: "undefined is Forbidden";
} : T extends boolean ? KindOfBoolean & {
    bool: true;
} : T extends number ? Extract<StructParam, {
    default: number;
}> & {
    num: true;
} : T extends string ? Extract<StructParam, {
    default: string;
}> & {
    str: true;
} : T extends number[] ? Extract<StructParam, {
    default: number[];
}> & {
    numArray: true;
} : T extends string[] ? Extract<StructParam, {
    default: string[];
}> & {
    strArray: true;
} : T extends boolean[] ? {
    kind: "boolean[] is Forbidden";
} & {
    boolArray: true;
} : T extends KnowTypes ? KindOfStructRef : T extends object ? KindOfStructRef | KindOfStruct<T> : {
    kind: `never:${path}`;
};

import { Token } from './parse/types/token';
export declare const compileAttributes: (tokens: ReadonlyArray<Token>) => {
    kind: string;
    default?: number[] | undefined;
    text?: string | undefined;
    desc?: string | undefined;
    digit?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    parent?: string | undefined;
} | {
    kind: string;
    default?: boolean | undefined;
    text?: string | undefined;
    desc?: string | undefined;
    on?: string | undefined;
    off?: string | undefined;
    parent?: string | undefined;
} | {
    kind: string;
    default?: string | undefined;
    text?: string | undefined;
    desc?: string | undefined;
    parent?: string | undefined;
} | {
    kind: string;
    default?: number | undefined;
    text?: string | undefined;
    desc?: string | undefined;
    parent?: string | undefined;
} | {
    kind: string;
    default: number[];
    text?: string | undefined;
    desc?: string | undefined;
    parent?: string | undefined;
};

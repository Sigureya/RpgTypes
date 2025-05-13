import type * as c from "./constants";
export type ControlChars = (typeof c)[keyof typeof c];
export type ControlCharFormat = `\\${string}[${number}]`;
export interface ControlCharInfo {
    controlChar: string;
    text: string;
}
export interface ControlChar {
    char: string;
    id: number;
}

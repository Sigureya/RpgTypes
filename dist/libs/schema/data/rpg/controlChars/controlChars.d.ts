export declare const createControlCharFormat: <C extends string>(char: C, id: number) => `\\${C}[${number}]`;
export declare const fromStringArray: <C extends string>(char: C, array: ReadonlyArray<string>) => {
    text: string;
    controlChar: `\\${C}[${number}]`;
}[];

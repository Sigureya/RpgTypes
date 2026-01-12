export declare const replaceNoteTextByMap: (data: {
    note: string;
}, dic: ReadonlyMap<string, string>, sep?: string) => string;
export declare const replaceNoteTextByFunction: (data: {
    note: string;
}, replaceFn: (key: string) => string | undefined, sep?: string) => string;

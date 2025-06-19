export interface ParamTexts {
    name: ParamNameLine;
    type: ParamTypeLine;
    default: ParamDefaultLine;
    base: string[];
    other: `@${string} ${string}`[];
}
export type ParamNameLine = `@param ${string}` | `@arg ${string}`;
export type ParamTypeLine = `@type ${string}`;
export type ParamDefaultLine = `@default ${string}`;
export type ParamBaseLine = `@text ${string}` | `@desc ${string}` | `@parent ${string}`;
export type ParamOtherLine = `@on ${string}` | `@off ${string}` | `@min ${string | number}` | `@max ${string | number}` | `@digit ${string | number}` | `@option ${string}` | `@value ${string | number}` | `@dir ${string}`;

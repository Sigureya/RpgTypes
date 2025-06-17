export interface ParamTexts {
    name: `${"@param" | "@arg"} ${string}`;
    type: `@type ${string}`;
    default: `@default ${string}`;
    base: string[];
    other: `@${string} ${string}`[];
}

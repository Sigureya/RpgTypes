import { Rmmz_TextState, Rmmz_Bitmap } from '../../../rmmzRuntime';
export declare const createTextBuffer: (rtl: boolean) => "" | "‫";
export declare const createTextState: (text: string, x: number, y: number, width: number, height: number, variableFn: (valiableId: number) => string | number, textFn: (ctrl: string, value: number) => string | undefined) => Rmmz_TextState;
export declare const flashTextState: (textState: Rmmz_TextState, bitmap: Rmmz_Bitmap) => Rmmz_TextState;
export declare const nextTextState: (textState: Rmmz_TextState, width: number) => Rmmz_TextState;

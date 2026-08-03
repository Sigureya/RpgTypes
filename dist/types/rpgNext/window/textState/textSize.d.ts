import { Rmmz_System, Rmmz_TextState, Rmmz_Window_Base } from '../../../rmmzRuntime';
import { Rmts_FontSizeInfo } from './types';
export declare const calcTextHeightFromRuntimeObjects: (textState: Rmmz_TextState, sysmte: Rmmz_System, window: Rmmz_Window_Base) => number;
export declare const calcTextHeight: (textState: Rmmz_TextState, info: Rmts_FontSizeInfo, lineSpacing: number) => number;
export declare const calcMaxFontSizeInLineMZ: (lineText: string, fontSizeInfo: Rmts_FontSizeInfo) => number;

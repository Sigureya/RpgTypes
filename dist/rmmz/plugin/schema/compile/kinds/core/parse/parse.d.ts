import { ParseState } from './internalTypes';
import { ParsedPlugin } from './types';
export declare const parsePlugin: (text: string) => ParsedPlugin;
export declare const parsePluginCore: (text: string, table: Record<string, (state: ParseState, value: string) => ParseState>) => ParsedPlugin;

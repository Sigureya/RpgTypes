import { ParsingContext, Token, ParamToken } from './types/token';
export interface SliceResult {
    params: ParsingContext[];
    commands: ParsingContext[];
}
export declare const parsePluginParam: (context: ParsingContext) => ParamToken;
export declare const groupTokensByContext: (tokens: Token[]) => SliceResult;

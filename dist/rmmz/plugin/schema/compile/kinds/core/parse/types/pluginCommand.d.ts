import { Token } from './token';
export interface PluginCommandTokens {
    command: string;
    desc?: string;
    text?: string;
    args: ArgToken[];
}
export interface ArgToken {
    arg: string;
    attributes: Token[];
}

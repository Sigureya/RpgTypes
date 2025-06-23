export interface Token {
    keyword: string;
    value: string;
}
export interface OptionItem {
    option: string;
    value: string;
}
export declare const tokenize: (text: string) => Token[];

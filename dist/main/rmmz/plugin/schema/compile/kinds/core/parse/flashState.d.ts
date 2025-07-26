import { ParseState } from './internalTypes';
export declare const withTexts: (command: {
    desc?: string;
    text?: string;
}) => {
    text?: string | undefined;
    desc?: string | undefined;
};
export declare const flashCurrentItem: (state: ParseState) => ParseState;

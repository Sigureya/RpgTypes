import { TermsOfReadSystemData, HandlerOfReadSystemData, ReadSystemResult } from './types';
export declare const FILENAME_SYSTEM = "System.json";
export declare const readSystemData: (terms: TermsOfReadSystemData, fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>, handlers: HandlerOfReadSystemData) => Promise<ReadSystemResult>;

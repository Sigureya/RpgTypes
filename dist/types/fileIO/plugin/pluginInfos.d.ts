import { ErrorMessage, ResultOfReadPluginInfos } from './types';
export declare const readPluginInfos: (message: ErrorMessage, fn: (filename: string) => Promise<string>) => Promise<ResultOfReadPluginInfos>;

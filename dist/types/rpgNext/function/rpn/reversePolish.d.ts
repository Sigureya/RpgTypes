import { RpnCommand } from './types';
export declare const calculateRPN: <T extends Record<string, number>>(commands: ReadonlyArray<RpnCommand>, variables: T) => number;
export declare const buildExpr: (commands: ReadonlyArray<RpnCommand>) => string;

import { System_Terms } from '../../../../rmmz';
export declare const replaceSystemTermsByMap: (terms: System_Terms, map: ReadonlyMap<string, string>) => System_Terms;
export declare const replaceSystemTerms: (terms: System_Terms, newTextFn: (text: string) => string | undefined) => System_Terms;

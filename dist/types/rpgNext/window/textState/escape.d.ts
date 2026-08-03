import { Rmmz_ActorsReadonly, Rmmz_Members, Rmmz_Variables } from '../../../rmmzRuntime';
export declare const convertEscapeCharactersMzStyle: (text: string, actors: Rmmz_ActorsReadonly<{
    name(): string;
}>, party: Rmmz_Members<{
    name(): string;
}>, variables: Rmmz_Variables, currncyUnit?: string) => string;
export declare const convertEscapeCharacters: (text: string, variableFn: (valiableId: number) => string | number, textFn: (ctrl: string, value: number) => string | undefined) => string;

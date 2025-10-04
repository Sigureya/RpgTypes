import { ParamKinds } from '../../../../../rmmz/plugin';
export interface StructCollection {
    matchedStructs: Set<string>;
    nestedStructs: Set<string>;
    targetKinds: Set<ParamKinds>;
    targetArrayKinds: Set<`${ParamKinds}[]`>;
}

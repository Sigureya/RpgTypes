/**
 * `DefaultValueType<T>`:
 * - Keeps properties of type `string | number | boolean | unknown[]` as they are.
 * - Makes properties of `object` type optional (`Partial<>`).
 * - Purpose: A type that allows setting default values while preserving required fields.
 */
export type DefaultValueType<T> = Pick<T, KeyofNonObject<T>> & Partial<T>;
/**
 * `KeyofNonObject<T>`:
 * - Extracts only the keys whose values are primitive types (`string | number | boolean | unknown[]`).
 * - Excludes object-type keys.
 * - This ensures that `Pick<T, KeyofNonObject<T>>` selects properties that remain required.
 */
export type KeyofNonObject<T> = {
    [K in keyof T]: T[K] extends string | number | boolean | unknown[] ? K : never;
}[keyof T];
/**
 * 【Note】
 * - For more details on type behavior, refer to the corresponding test cases.
 */

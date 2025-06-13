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
  [K in keyof T]: T[K] extends string | number | boolean | unknown[]
    ? K // Retain keys with primitive types
    : never; // Exclude object-type keys
}[keyof T];

/**
 * 【Example of Type Behavior】
 * The expected type of `DefaultValueType<Example>`:
 * {
 *   name: string;
 *   age: number;
 *   settings?: {
 *     theme?: string;
 *     notifications?: boolean;
 *   };
 *   list: number[];
 * }
 */
type Example = {
  name: string;
  age: number;
  settings: {
    theme: string;
    notifications: boolean;
  };
  list: number[];
};

// Example usage (This code is verified through test cases)
const e: DefaultValueType<Example> = {
  list: [], // `list` remains required
  name: "John", // `name` remains required
  age: 30, // `age` remains required
  // `settings` is optional
  // settings: {
  //   theme: "dark",
  //   notifications: true,
  // },
};

/**
 * 【Note】
 * - For more details on type behavior, refer to the corresponding test cases.
 */

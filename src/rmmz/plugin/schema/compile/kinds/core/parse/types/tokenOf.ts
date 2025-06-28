export type TokenOf<T extends { kind: string }> = NonNullable<
  | {
      [K in keyof T]: {
        keyword: keyof T;
        value: ValueType<T[K]>;
      };
    }[keyof T]
  | { keyword: "type"; value: T["kind"] }
>;

type ValueType<T> = T extends number
  ? `${number}`
  : T extends string
  ? string
  : T extends boolean
  ? "true" | "false"
  : T extends number[] | string[]
  ? `[${string}]`
  : never;

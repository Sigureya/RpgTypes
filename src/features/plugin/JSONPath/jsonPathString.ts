export type JSONPathType<T, Root extends string = "$"> = string &
  (ValueOf<JSONPathDirect<T, Root>> | ValueOf<JSONPathNested<T, Root>>);
type ValueOf<T> = T[keyof T];

type JSONPathDirect<T, Parent extends string> =
  | {
      [K in keyof T]:
        | `${Parent}.${K & string}`
        | ArrayPath<T[K], `${Parent}.${K & string}`>;
    };

type ArrayIndex = `${number}` | "*";

type ArrayAccsess = `[${number}]` | "[*]";

type ArrayPath<T, Root extends string> = T extends Array<number | string>
  ? `${Root}[${ArrayIndex}]`
  : never;

type JSONPathNested<T, Root extends string> = {
  [K in Extract<keyof T, string>]: T[K] extends Array<infer U extends object>
    ?
        | `${Root}.${K}${ArrayAccsess}`
        | `${Root}.${K}${ArrayAccsess}.${Extract<keyof U, string>}`
        | JSONPathNested<U, `${Root}.${K}${ArrayAccsess}`>
    : "[*]" | `${Root}.${K}.${Extract<keyof T[K], string>}`;
};

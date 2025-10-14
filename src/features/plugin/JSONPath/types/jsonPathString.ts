export type JSONPathType<T, Root extends string = "$"> = string &
  ValueOf<T extends object ? JSONPathNested<T, Root> : {}>;

type ValueOf<T> = T[keyof T];

type ArrayAccsess = `[${number}]` | "[*]";

type JSONPathNested<T extends object, Parent extends string> = {
  [K in Extract<keyof T, string>]:
    | `${Parent}.${K & string}`
    | (T[K] extends object
        ? T[K] extends unknown[]
          ? `${Parent}.${K & string}${ArrayAccsess}`
          : ValueOf<JSONPathNested<T[K], `${Parent}.${K & string}`>>
        : never)
    | (T[K] extends Array<infer U>
        ?
            | `${Parent}.${K}${ArrayAccsess}.${string & keyof U}`
            | (U extends unknown[]
                ? never
                : U extends object
                ? ValueOf<JSONPathNested<U, `${Parent}.${K}${ArrayAccsess}`>>
                : never)
        : never);
};

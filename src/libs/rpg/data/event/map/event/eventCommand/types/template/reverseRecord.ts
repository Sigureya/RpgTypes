export type ReverseRecord<R extends Record<PropertyKey, PropertyKey>> =
  MapByCode<MapPair<R>>;

export type MapByCode<
  R extends Record<PropertyKey, { code: PropertyKey; param: unknown }>
> = {
  [K in R[keyof R]["code"]]: Extract<R[keyof R], { code: K }>["param"];
};

export type MergeRecord<
  R1 extends Record<PropertyKey, unknown>,
  R2 extends Record<keyof R1, PropertyKey>
> = {
  [K in keyof R1]: {
    param: R1[K];
    code: R2[K];
  };
};

type MapPair<Table extends Record<PropertyKey, PropertyKey>> = {
  [K in keyof Table]: { code: Table[K]; param: K };
};

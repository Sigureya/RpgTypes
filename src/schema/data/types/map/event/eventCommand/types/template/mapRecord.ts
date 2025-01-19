export type MapRecordToCode<
  R1 extends Record<PropertyKey, unknown>,
  R2 extends Record<keyof R1, PropertyKey>
> = MapByCode<MergeRecord<R1, R2>>;

type MergeRecord<
  R1 extends Record<PropertyKey, unknown>,
  R2 extends Record<keyof R1, PropertyKey>
> = {
  [K in keyof R1]: {
    param: R1[K];
    code: R2[K];
  };
};

type MapByCode<
  R extends Record<PropertyKey, { code: PropertyKey; param: unknown }>
> = {
  [K in R[keyof R]["code"]]: Extract<R[keyof R], { code: K }>["param"];
};

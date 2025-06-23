export type ParamToObject<
  T extends Record<
    string,
    {
      default: unknown;
    }
  >
> = {
  [K in keyof T]: T[K] extends { default: infer D } ? D : never;
};

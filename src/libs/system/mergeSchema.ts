import type { Data_System } from "./system";

export type PartialSystemSchema = {
  required: ReadonlyArray<keyof Data_System>;
  properties: object;
};

export const mergeSchema = (list: ReadonlyArray<PartialSystemSchema>) => {
  const reducedList = reduce(list);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(reducedList.required)),
    properties: reducedList.properties,
  };
};

const reduce = (
  list: ReadonlyArray<PartialSystemSchema>
): PartialSystemSchema => {
  return list.reduce<PartialSystemSchema>(
    (acc, item) => ({
      required: [...acc.required, ...item.required],
      properties: { ...acc.properties, ...item.properties },
    }),
    { required: [], properties: {} } satisfies PartialSystemSchema
  );
};

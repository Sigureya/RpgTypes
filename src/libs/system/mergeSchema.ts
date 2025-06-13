import type { Data_System } from "./system";

export interface PartialSystemSchema {
  required: ReadonlyArray<keyof Data_System>;
  properties: Record<string, object>;
  additionalProperties: false;
  type: "object";
}

export const mergeSystemSchema = (list: ReadonlyArray<PartialSystemSchema>) => {
  const reducedList = reduce(list);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(reducedList.required)),
    properties: reducedList.properties,
  };
};

const reduce = (list: ReadonlyArray<PartialSystemSchema>) => {
  type Type = Pick<PartialSystemSchema, "required" | "properties">;
  return list.reduce<Type>(
    (acc, item) => ({
      required: [...acc.required, ...item.required],
      properties: { ...acc.properties, ...item.properties },
    }),
    { required: [], properties: {} }
  );
};

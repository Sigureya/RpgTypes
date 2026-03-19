import type { Data_Class } from "./types";

export const makeClassData = (data: Partial<Data_Class> = {}): Data_Class => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  traits: [],
  note: data.note ?? "",
  params: [[0], [0], [0], [0], [0], [0], [0], [0]],
  learnings: data.learnings ?? [],
  expParams: data.expParams ?? [],
});

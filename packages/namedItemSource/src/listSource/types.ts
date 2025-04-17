import type { NamedItemSource } from "@RpgTypes/schema";

export { NamedItemSource } from "@RpgTypes/schema";
export type NamedItemRecord<T extends {}> = Record<keyof T, NamedItemSource>;

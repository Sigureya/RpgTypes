import type { PickByType } from "@RpgTypes/templates";
import type {
  SourceKeyConcept,
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./itemMappert";

type PrimitiveProperties<T> = Extract<
  keyof PickByType<T, number | string>,
  string
>;

export interface FormatRule<
  T,
  SoruceKey extends SourceKeyConcept = SourceKeyConcept
> {
  itemMapper: FormatItemMapper<T, SoruceKey>;
  placeHolders: PrimitiveProperties<T>[];
  itemMappers: FormatItemMapper<T, SoruceKey>[];
}

export interface FormatField<T> {
  dataKey: PrimitiveProperties<T>;
  placeHolder: `{${PrimitiveProperties<T>}}`;
}

export interface FormatRuleCompiled<
  T,
  SoruceKey extends SourceKeyConcept = SourceKeyConcept
> {
  properties: FormatField<T>[];
  itemMappers: FormatItemMapperCompiled<T, SoruceKey>[];
}

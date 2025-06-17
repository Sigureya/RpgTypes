import type {
  AnnotationBase,
  BooleanArg,
  ComboAnnotation,
  FilePathAnnotation,
  MultilineString,
  NumberSelect,
  StringArg,
  StringSelect,
  ToArrayAnnotation,
} from "./primitive";
import type { DataIndexArg, NumberArg } from "./primitive/numbers";
// import type { HasStruct } from "./struct";
import type {
  StructAnnotationBase_Completed,
  StructAnnotationBase_Union,
} from "./struct";

type Dispatch<T, Param extends AnnotationBase> = (
  param: Omit<Param | ToArrayAnnotation<Param>, "default">
) => T;

export interface AnnotationMapper<
  T,
  StructType extends StructAnnotationBase_Union = StructAnnotationBase_Completed
> {
  number: Dispatch<T, NumberArg>;
  boolean: (bool: BooleanArg) => T;
  string: Dispatch<T, StringArg | MultilineString>;
  dataIndex: Dispatch<T, DataIndexArg<string>>;
  struct: (struct: StructType) => T;
  select: Dispatch<T, NumberSelect | StringSelect>;
  file: Dispatch<T, FilePathAnnotation>;
  combo: Dispatch<T, ComboAnnotation>;
}

export type JSONPathType<T, Root extends string = "$"> = {
  [K in keyof T]: `${Root}.${K & string}`;
}[keyof T] &
  string;

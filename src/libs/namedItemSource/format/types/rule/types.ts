export interface FormatRule<T> {
  itemNamePlaceHolder?: string;
  placeHolders: Extract<keyof T, string>[];
}

export interface FormatRuleCompiled<T> {
  dataKey: string & keyof T;
  placeHolder: `{${string & keyof T}}`;
}

export interface FormatRule<T extends object> {
  itemNamePlaceHolder?: string;
  placeHolders: Extract<keyof T, string>[];
}

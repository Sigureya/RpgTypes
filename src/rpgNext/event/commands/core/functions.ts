export interface FunctionsTable {
  callBoolean(name: string, arg: object): boolean;
  callNumber(name: string, arg: object): number;
  callString(name: string, arg: object): string;
}

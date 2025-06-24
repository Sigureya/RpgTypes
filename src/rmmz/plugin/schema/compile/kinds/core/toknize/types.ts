export interface Token {
  keyword: string;
  value: string;
}

export interface OptionItem {
  option: string;
  value: string;
}
export interface Context2 {
  head: Token;
  tokens: Token[];
}

export interface Token {
  keyword: string;
  value: string;
}
export interface HeadToken<keyword extends string = string> extends Token {
  keyword: keyword;
  value: string;
}

export interface OptionItem {
  option: string;
  value: string;
}
export interface ParsingContext<HeadToken extends Token = Token> {
  head: HeadToken;
  tokens: Token[];
}

export interface ParamTokens {
  param: string;
  attributes: Token[];
}

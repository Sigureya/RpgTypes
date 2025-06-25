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

export interface PluginCommandTokens {
  command: string;
  desc?: string;
  text?: string;
  args: ArgToken[];
}

export interface PluginCommandArgContext {
  name: string;
  args: Token[];
}

export interface ArgToken {
  arg: string;
  attributes: Token[];
}

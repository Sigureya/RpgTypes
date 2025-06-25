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
  token: Token[];
}

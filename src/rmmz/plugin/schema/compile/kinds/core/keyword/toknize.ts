import type {
  KEYWORD_HELP,
  KEYWORD_PARAM,
  KEYWORD_COMMAND,
  KEYWORD_ARG,
} from "./keyword";

export interface Token {
  keyword: string;
  value: string;
}

export interface OptionItem {
  option: string;
  value: string;
}

type BlockTypes =
  | typeof KEYWORD_HELP
  | typeof KEYWORD_PARAM
  | typeof KEYWORD_ARG;

export interface TokenBlock {
  xxx: "plugin" | "struct" | typeof KEYWORD_COMMAND;
  blockType: BlockTypes;
  tokens: Token[];
}

export const tokenize = (text: string): Token[] => {
  const lines = text.split(/\r?\n/);

  return lines.reduce<Token[]>((tokens, line) => {
    const token = tokenizeLine(line);
    if (token) {
      tokens.push(token);
    }
    return tokens;
  }, []);
};

const tokenizeLine = (line: string): Token | null => {
  const trimmedLine: string = line.replace(/^[\*\s]+/, "");
  if (!trimmedLine.startsWith("@")) {
    return null;
  }
  const match = trimmedLine.match(
    /^@([a-zA-Z][a-zA-Z0-9_]{1,10})\s+(.{0,10000})$/
  );
  return match ? { keyword: match[1], value: match[2].trim() } : null;
};

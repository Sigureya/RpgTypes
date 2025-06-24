export interface Token {
  keyword: string;
  value: string;
}

export interface OptionItem {
  option: string;
  value: string;
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
  const trimmedLine: string = line.replace(/^[\*\s]+/, "").trimEnd();
  if (!trimmedLine.startsWith("@")) {
    return null;
  }
  const match = trimmedLine.match(
    /^@([a-zA-Z][a-zA-Z0-9_]{1,11})\s+(.{0,10000})$/
  );
  return match ? { keyword: match[1], value: match[2].trim() } : null;
};
const isHead = (text: string): boolean => {
  return text.startsWith("@command") || text.startsWith("@param");
};
export const splitByContext = (text: string): string[] => {
  const lines = text.split(/\r?\n/);
  return lines
    .reduce<string[]>((acc, line) => {
      // 区切りとなる行（@command で始まる）
      if (isHead(line.trim())) {
        acc.push(line);
      } else if (acc.length > 0) {
        acc[acc.length - 1] += "\n" + line;
      }
      return acc;
    }, [])
    .map((s) => s.trim())
    .filter(Boolean);
};

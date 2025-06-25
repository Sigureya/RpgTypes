import type { Token } from "./types/token";

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

export const fn = (input: string) => {
  // コメントブロックから@paramごとに分割
  const paramBlocks = input
    .split(/@param /)
    .slice(1)
    .map((block) => "@param " + block);

  const result = paramBlocks.reduce(
    (acc, block) => {
      // パラメータ名
      const nameMatch = block.match(/^@param\s+([^\n\r]+)/);
      const name = nameMatch ? nameMatch[1].trim() : "";

      // @text
      const textMatch = block.match(/@text\s+([^\n\r]+)/);
      const title = textMatch ? textMatch[1].trim() : "";

      // @type
      const typeMatch = block.match(/@type\s+([^\n\r]+)/);
      const type = typeMatch ? typeMatch[1].trim() : "string";

      // @default
      const defaultMatch = block.match(/@default\s+([^\n\r]+)/);
      const defRaw = defaultMatch ? defaultMatch[1].trim() : undefined;
      const def =
        type === "number" && defRaw !== undefined ? Number(defRaw) : defRaw;

      if (name) {
        acc.properties[name] = {
          type,
          ...(title && { title }),
          ...(def !== undefined && { default: def }),
        };
        acc.required.push(name);
      }
      return acc;
    },
    { properties: {} as Record<string, any>, required: [] as string[] }
  );

  return {
    type: "object",
    properties: result.properties,
    required: result.required,
  };
};

import type { StructParamPrimitive } from "./kinds";

export interface PluginParam {
  param: string;
  data: StructParamPrimitive;
}

const getTag = (lines: string[], tag: string): string | undefined => {
  const line = lines.find((l) => l.startsWith(`@${tag}`));
  if (!line) {
    return undefined;
  }
  return line.replace(`@${tag}`, "").trim();
};

export const parsePluginParam = (text: string): PluginParam => {
  // 1行ごとに分割し、@paramや@typeなどを抽出
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  // ヘルパーで@xxxを抽出

  // @param
  const param = getTag(lines, "param") || "";
  // @type
  const type = getTag(lines, "type") || "string";
  // @default
  const defaultRaw = getTag(lines, "default");
  // @desc
  const desc = getTag(lines, "desc");
  // @text
  const textTag = getTag(lines, "text");
  // @on/@off
  const on = getTag(lines, "on");
  const off = getTag(lines, "off");

  // options/select/combo用
  const optionLines = lines.filter((l) => l.startsWith("@option"));
  const valueLines = lines.filter((l) => l.startsWith("@value"));

  if (type === "boolean") {
    return {
      param,
      data: {
        kind: "boolean",
        default: defaultRaw === "true" || defaultRaw === "1" ? true : false,
        desc: textTag || desc,
        on: on,
        off: off,
      },
    };
  }
  if (type === "number") {
    return {
      param,
      data: {
        kind: "number",
        default: defaultRaw ? Number(defaultRaw) : 0,
        desc,
        digit: getTag(lines, "digit")
          ? Number(getTag(lines, "digit"))
          : undefined,
        min: getTag(lines, "min") ? Number(getTag(lines, "min")) : undefined,
        max: getTag(lines, "max") ? Number(getTag(lines, "max")) : undefined,
      },
    };
  }
  if (type === "number[]") {
    return {
      param,
      data: {
        kind: "number[]",
        default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
        desc,
        digit: getTag(lines, "digit")
          ? Number(getTag(lines, "digit"))
          : undefined,
      },
    };
  }
  if (type === "string" || type === "multiline_string") {
    return {
      param,
      data: {
        kind: type,
        default: defaultRaw ?? "",
        desc,
      },
    };
  }
  if (type === "string[]") {
    return {
      param,
      data: {
        kind: "string[]",
        default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
        desc,
      },
    };
  }
  if (
    [
      "actor",
      "enemy",
      "class",
      "skill",
      "item",
      "weapon",
      "armor",
      "state",
      "troop",
      "common_event",
    ].includes(type)
  ) {
    return {
      param,
      data: {
        kind: type as any,
        default: defaultRaw ? Number(defaultRaw) : 0,
        desc,
      },
    };
  } else if (
    [
      "actor[]",
      "enemy[]",
      "class[]",
      "skill[]",
      "item[]",
      "weapon[]",
      "armor[]",
      "state[]",
      "troop[]",
      "common_event[]",
    ].includes(type)
  ) {
    return {
      param,
      data: {
        kind: type as any,
        default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
        desc,
      },
    };
  }
  if (type === "select") {
    // options/valuesを抽出
    const options: { value: string; option: string }[] = [];
    for (let i = 0; i < optionLines.length; i++) {
      const option = optionLines[i].replace("@option", "").trim();
      const value = valueLines[i]
        ? valueLines[i].replace("@value", "").trim()
        : option;
      options.push({ value, option });
    }
    return {
      param,
      data: {
        kind: "select",
        default: valueLines[0]
          ? valueLines[0].replace("@value", "").trim()
          : defaultRaw ?? "",
        desc,
        options,
      },
    };
  }
  if (type === "combo") {
    // comboは@optionのみ
    const options = optionLines.map((l) => l.replace("@option", "").trim());
    return {
      param,
      data: {
        kind: "combo",
        default: defaultRaw ?? "",
        options,
      },
    };
  }
  if (type.startsWith("struct<")) {
    // struct<Person> のような場合
    const structName = type.match(/^struct<(.+)>$/)?.[1] ?? "";
    return {
      param,
      data: {
        kind: "struct",
        struct: structName,
      },
    };
  }
  if (type === "struct") {
    // struct: @type struct @struct Person
    const structName = getTag(lines, "struct") ?? "";
    return {
      param,
      data: {
        kind: "struct",
        struct: structName,
      },
    };
  }
  {
    // fallback: string
    return {
      param,
      data: {
        kind: "string",
        default: defaultRaw ?? "",
        desc,
      },
    };
  }
};

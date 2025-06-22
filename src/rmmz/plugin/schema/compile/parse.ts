import type { StructParamPrimitive } from "./kinds";

interface PluginParam {
  param: string;
  data: StructParamPrimitive;
}

const getTag = (lines: string[], tag: string) => {
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

  // 型ごとに分岐
  let data: StructParamPrimitive;

  if (type === "boolean") {
    data = {
      kind: "boolean",
      default: defaultRaw === "true" || defaultRaw === "1" ? true : false,
      desc: textTag || desc,
      on: on,
      off: off,
    };
  } else if (type === "number") {
    data = {
      kind: "number",
      default: defaultRaw ? Number(defaultRaw) : 0,
      desc,
      digit: getTag(lines, "digit")
        ? Number(getTag(lines, "digit"))
        : undefined,
      min: getTag(lines, "min") ? Number(getTag(lines, "min")) : undefined,
      max: getTag(lines, "max") ? Number(getTag(lines, "max")) : undefined,
    };
  } else if (type === "number[]") {
    data = {
      kind: "number[]",
      default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
      desc,
      digit: getTag(lines, "digit")
        ? Number(getTag(lines, "digit"))
        : undefined,
    };
  } else if (type === "string" || type === "multiline_string") {
    data = {
      kind: type,
      default: defaultRaw ?? "",
      desc,
    };
  } else if (type === "string[]") {
    data = {
      kind: "string[]",
      default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
      desc,
    };
  } else if (
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
    data = {
      kind: type as any,
      default: defaultRaw ? Number(defaultRaw) : 0,
      desc,
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
    data = {
      kind: type as any,
      default: defaultRaw ? JSON.parse(defaultRaw.replace(/'/g, '"')) : [],
      desc,
    };
  } else if (type === "select") {
    // options/valuesを抽出
    const options: { value: string; option: string }[] = [];
    for (let i = 0; i < optionLines.length; i++) {
      const option = optionLines[i].replace("@option", "").trim();
      const value = valueLines[i]
        ? valueLines[i].replace("@value", "").trim()
        : option;
      options.push({ value, option });
    }
    data = {
      kind: "select",
      default: valueLines[0]
        ? valueLines[0].replace("@value", "").trim()
        : defaultRaw ?? "",
      desc,
      options,
    };
  } else if (type === "combo") {
    // comboは@optionのみ
    const options = optionLines.map((l) => l.replace("@option", "").trim());
    data = {
      kind: "combo",
      default: defaultRaw ?? "",
      options,
    };
  } else if (type.startsWith("struct<")) {
    // struct<Person> のような場合
    const structName = type.match(/^struct<(.+)>$/)?.[1] ?? "";
    data = {
      kind: "struct",
      struct: structName,
    };
  } else if (type === "struct") {
    // struct: @type struct @struct Person
    const structName = getTag(lines, "struct") ?? "";
    data = {
      kind: "struct",
      struct: structName,
    };
  } else {
    // fallback: string
    data = {
      kind: "string",
      default: defaultRaw ?? "",
      desc,
    };
  }

  return { param, data } as PluginParam;
};

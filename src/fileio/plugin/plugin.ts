import type {
  DeepJSONParserHandlers,
  PluginSchema,
  PluginParamsRecord,
  ParsedPlugin,
} from "@sigureya/rmmz-plugin-schema";
import {
  compilePluginAsArraySchema,
  pluginSourceToArraySchema,
  parsePluginByLocale,
} from "@sigureya/rmmz-plugin-schema";
import type { ParsePluginResult, PluginReadOptions } from "./types";

interface ErrorMessage {
  fileNotFound: string;
  schemaParseError: string;
}

interface ResultOfReadPlugin {
  message: string;
  success: boolean;
  plugin: PluginSchema;
}

const readPluginFromInfo = async (
  info: PluginParamsRecord,
  options: PluginReadOptions,
  message: ErrorMessage,
  readFileFn: (filename: string) => Promise<string>,
  handlers: DeepJSONParserHandlers,
) => {
  try {
    const src = await readFileFn(info.name);
    return parsePluginEx2(src, info, options, message, handlers);
    //   return rrr(src, info, options, message);
  } catch {
    return makePluginError(message.fileNotFound);
  }
};

export const parsePluginEx2 = (
  src: string,
  info: PluginParamsRecord,
  options: PluginReadOptions,
  message: ErrorMessage,
  handlers: DeepJSONParserHandlers,
): ResultOfReadPlugin => {
  const parsed = parsePluginByLocale(src, options.locale);
  const t = tryXXX(parsed, message, handlers);
  if (!t.success) {
    return makePluginError(t.message);
  }
  return {
    message: "",
    success: true,
    plugin: {
      pluginName: info.name,
      target: "MZ",
      locale: parsed.locale,
      meta: parsed.meta,
      dependencies: parsed.dependencies,
      schema: {
        structs: t.data.structs,
        commands: t.data.commands,
        params: t.data.params,
      },
    },
  };
};

export const tryXXX = (
  parsed: ParsedPlugin,
  message: ErrorMessage,
  handlers: DeepJSONParserHandlers,
): ParsePluginResult => {
  try {
    return {
      success: true,
      message: "",
      data: compilePluginAsArraySchema(parsed, handlers),
    };
  } catch {
    return {
      success: false,
      message: message.schemaParseError,
      data: {
        structs: [],
        commands: [],
        params: [],
      },
    };
  }
};

const makePluginError = (message: string): ResultOfReadPlugin => ({
  message,
  success: false,
  plugin: {
    pluginName: "",
    target: "",
    locale: "",
    meta: {},
    dependencies: { base: [], orderAfter: [], orderBefore: [] },
    schema: {
      structs: [],
      commands: [],
      params: [],
    },
  },
});

import type {
  DeepJSONParserHandlers,
  PluginSchema,
} from "@sigureya/rmmz-plugin-schema";
import {
  pluginSourceToArraySchema,
  type PluginParamsRecord,
} from "@sigureya/rmmz-plugin-schema";
import type { PluginReadOptions } from "./types";

interface ErrorMessage {
  fileNotFound: string;
  paramParseError: string;
}

interface ResultOfReadPlugin {
  message: string;
  success: boolean;
  plugin: PluginSchema;
}

const readPluginFromInfo = async <T>(
  info: PluginParamsRecord,
  options: PluginReadOptions,
  message: ErrorMessage,
  readFileFn: (filename: string) => Promise<string>,
) => {
  try {
    const src = await readFileFn(info.name);
    //   return rrr(src, info, options, message);
  } catch {
    return {
      message: message.fileNotFound,
    };
  }
};

export const parsePluginEx = (
  src: string,
  info: PluginParamsRecord,
  options: PluginReadOptions,
  message: ErrorMessage,
  handles: DeepJSONParserHandlers,
): ResultOfReadPlugin => {
  try {
    return {
      message: "",
      success: true,
      plugin: pluginSourceToArraySchema(
        {
          locale: options.locale,
          pluginName: info.name,
          source: src,
        },
        handles,
      ),
    };
  } catch {
    return {
      message: message.paramParseError,
      success: false,
      plugin: {
        pluginName: info.name,
        target: "",
        locale: options.locale,
        meta: {},
        dependencies: { base: [], orderAfter: [], orderBefore: [] },
        schema: {
          structs: [],
          commands: [],
          params: [],
        },
      },
    };
  }
};

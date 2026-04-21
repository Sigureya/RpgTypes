import { parsePluginParamRecord } from "@sigureya/rmmz-plugin-schema";
import { FILENAME_PLUGINS_JS } from "./constants";
import type { ErrorMessage, ResultOfReadPluginInfos } from "./types";

export const readPluginInfos = async (
  message: ErrorMessage,
  fn: (filename: string) => Promise<string>,
): Promise<ResultOfReadPluginInfos> => {
  try {
    const src: string = await fn(FILENAME_PLUGINS_JS);
    return ppp(src, message);
  } catch {
    return {
      message: message.fileNotFound,
      filename: FILENAME_PLUGINS_JS,
      plugins: [],
      success: false,
    };
  }
};

const ppp = (src: string, message: ErrorMessage): ResultOfReadPluginInfos => {
  try {
    return {
      message: "",
      filename: FILENAME_PLUGINS_JS,
      plugins: parsePluginParamRecord(src),
      success: true,
    };
  } catch {
    return {
      message: message.parseError,
      filename: FILENAME_PLUGINS_JS,
      plugins: [],
      success: false,
    };
  }
};

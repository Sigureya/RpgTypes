import type { PluginParamsRecord } from "@sigureya/rmmz-plugin-schema";

export interface ErrorMessage {
  fileNotFound: string;
  parseError: string;
}

export interface ResultOfReadPluginInfos {
  message: string;
  plugins: PluginParamsRecord[];
  success: boolean;
  filename: string;
}

export interface PluginReadOptions {
  locale: string;
}

import { isTextString } from "@RpgTypes/features/core/extract/plugin/conv";
import type { RawGameEventData } from "@RpgTypes/fileio";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import type {
  AnyStringParam,
  PluginReplacePathData,
  PluginSchema,
  PluginSchemaArray,
  PrimitiveParam,
} from "@sigureya/rmmz-plugin-schema";
import {
  createPluginParamDictionary,
  filterPluginSchemaByFn,
  filterPluginSchemaStringParams,
} from "@sigureya/rmmz-plugin-schema";
import {
  extractPluginCommandFromCommn,
  extractPluginCommandFromMap,
  extractPluginCommandFromTroop,
} from "./core/extractEventText";

export type PluginCommandMapKey = `${string}:${string}`;

export type PluginTextSource = Pick<PluginSchema, "pluginName" | "schema">;

export type AnyParamTextPredicate = (
  param: AnyStringParam,
  name: string,
) => boolean;

export const createPluginCommandKey = (
  pluginName: string,
  commandName: string,
): PluginCommandMapKey => {
  return `${pluginName}:${commandName}`;
};

export const createPluginCommandKeyFromCommand = (
  command: Command_PluginCommandMZ,
): PluginCommandMapKey => {
  return createPluginCommandKey(command.parameters[0], command.parameters[1]);
};

export const collectPluginCommands = (
  events: RawGameEventData,
): Command_PluginCommandMZ[] => {
  const common = events.commonEvents.data.flatMap(
    extractPluginCommandFromCommn,
  );
  const troop = events.troops.data.flatMap(extractPluginCommandFromTroop);
  const map = events.mapFiles.validMaps.flatMap((entry) =>
    extractPluginCommandFromMap(entry.map).flat(2),
  );

  return [...common, ...troop, ...map];
};

export const groupPluginCommandsByKey = (
  commands: ReadonlyArray<Command_PluginCommandMZ>,
): Map<PluginCommandMapKey, Command_PluginCommandMZ[]> => {
  const map = new Map<PluginCommandMapKey, Command_PluginCommandMZ[]>();
  // eslint-disable-next-line @functional/no-loop-statements
  for (const command of commands) {
    const key = createPluginCommandKeyFromCommand(command);
    const list = map.get(key);
    if (list) {
      list.push(command);
      continue;
    }
    map.set(key, [command]);
  }
  return map;
};

export const isTextAnyParamStrict = (
  param: AnyStringParam,
  _name: string,
): boolean => {
  return isTextString(param.default);
};

export const isTextTargetParam = (
  param: PrimitiveParam,
  name: string,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): boolean => {
  switch (param.kind) {
    case "string":
    case "multiline_string":
    case "string[]":
    case "multiline_string[]":
    case "combo":
    case "struct":
    case "struct[]":
      return true;
    case "any":
      return anyParamFn(param, name);
    default:
      return false;
  }
};

export const filterPluginTextSchema = (
  schema: PluginSchemaArray,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): PluginSchemaArray => {
  const textLikeSchema = filterPluginSchemaStringParams(schema);
  return filterPluginSchemaByFn(textLikeSchema, (param, name) =>
    isTextTargetParam(param, name, anyParamFn),
  );
};

export const createPluginTextPathDictionary = (
  pluginName: string,
  schema: PluginSchemaArray,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): PluginReplacePathData => {
  const textSchema = filterPluginTextSchema(schema, anyParamFn);
  return createPluginParamDictionary(pluginName, textSchema);
};

export const createPluginTextPathDictionaries = (
  plugins: ReadonlyArray<PluginTextSource>,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): PluginReplacePathData[] => {
  return plugins.map((plugin) =>
    createPluginTextPathDictionary(
      plugin.pluginName,
      plugin.schema,
      anyParamFn,
    ),
  );
};

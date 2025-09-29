import { compileAttributes } from "./attributes";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./parse/types";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginStructSchemaArray,
  PluginSchemaArray,
} from "./types";

export const compilePluginAsArray = (
  parsedPlugin: ParsedPlugin
): PluginSchemaArray => ({
  commands: mapCommands(parsedPlugin.commands),
  params: mapParams(parsedPlugin.params),
  structs: mapStructs(parsedPlugin.structs),
});

const mapParams = (params: ReadonlyArray<PluginParamTokens>): PluginParam[] => {
  return params.map(
    (p): PluginParam => ({ name: p.name, attr: compileAttributes(p) })
  );
};

const mapCommands = (
  commands: ReadonlyArray<PluginCommandTokens>
): PluginCommandSchemaArray[] => {
  return commands.map(
    (cmd): PluginCommandSchemaArray => ({
      command: cmd.command,
      desc: cmd.desc,
      text: cmd.text,
      args: mapParams(cmd.args),
    })
  );
};

const mapStructs = (
  structs: ReadonlyArray<StructParseState>
): PluginStructSchemaArray[] => {
  return structs.map(
    (s): PluginStructSchemaArray => ({
      struct: s.name,
      params: mapParams(s.params),
    })
  );
};

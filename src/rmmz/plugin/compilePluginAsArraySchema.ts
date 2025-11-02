import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginStructSchemaArray,
  PluginSchemaArray,
} from "./core";
import { compileAttributes } from "./core";
import type {
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./core/parse/types";
import type { PluginTokens } from "./core/parse/types/types";

export const compilePluginAsArraySchema = (
  parsedPlugin: PluginTokens
): PluginSchemaArray => ({
  commands: mapCommands(parsedPlugin.commands),
  params: mapParams(parsedPlugin.params),
  structs: mapStructs(parsedPlugin.structs),
});

const mapParams = (params: ReadonlyArray<PluginParamTokens>): PluginParam[] => {
  return params.map(
    (p): PluginParam => ({
      name: p.name,
      attr: compileAttributes(p),
    })
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

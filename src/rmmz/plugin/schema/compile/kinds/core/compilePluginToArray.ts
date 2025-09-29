import { compileAttributes } from "./attributes";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./parse/types";
import type {
  PluginCommandEx,
  PluginParam,
  PluginStructEx,
  PluginXXX,
} from "./types";

export const compilePluginAsArray = (
  parsedPlugin: ParsedPlugin
): PluginXXX => ({
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
): PluginCommandEx[] => {
  return commands.map(
    (cmd): PluginCommandEx => ({
      command: cmd.command,
      desc: cmd.desc,
      text: cmd.text,
      args: mapParams(cmd.args),
    })
  );
};

const mapStructs = (
  structs: ReadonlyArray<StructParseState>
): PluginStructEx[] => {
  return structs.map(
    (s): PluginStructEx => ({
      struct: s.name,
      params: mapParams(s.params),
    })
  );
};

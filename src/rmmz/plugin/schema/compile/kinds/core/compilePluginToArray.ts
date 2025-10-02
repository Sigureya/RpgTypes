import { compileAttributes } from "./attributes";
import type {
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./parse/types";
import type { PluginTokens } from "./parse/types/types";
import type { PrimitiveParam } from "./primitiveParams";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./types";

export const compilePluginAsArray = (
  parsedPlugin: PluginTokens
): PluginSchemaArray<PrimitiveParam> => ({
  commands: mapCommands(parsedPlugin.commands),
  params: mapParams(parsedPlugin.params),
  structs: mapStructs(parsedPlugin.structs),
});

const mapParams = (
  params: ReadonlyArray<PluginParamTokens>
): PluginParam<PrimitiveParam>[] => {
  return params.map(
    (p): PluginParam<PrimitiveParam> => ({
      name: p.name,
      attr: compileAttributes(p),
    })
  );
};

const mapCommands = (
  commands: ReadonlyArray<PluginCommandTokens>
): PluginCommandSchemaArray<PrimitiveParam>[] => {
  return commands.map(
    (cmd): PluginCommandSchemaArray<PrimitiveParam> => ({
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
  return structs.map((s) => ({
    struct: s.name,
    params: mapParams(s.params),
  }));
};

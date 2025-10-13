import type { PrimitiveParam } from "./core";
import { compileAttributes } from "./core/attributes";
import type {
  PluginCommandTokens,
  PluginParamTokens,
  StructParseState,
} from "./core/parse/types";
import type { PluginTokens } from "./core/parse/types/types";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./core/types";

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

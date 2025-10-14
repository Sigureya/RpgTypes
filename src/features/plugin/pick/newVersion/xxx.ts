import type {
  ParamKinds,
  PluginSchemaArray,
  PluginCommandSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import { collectStructsByKinds } from "./collectStructs/collectStructs";
import type { ReadonlyStructCollection } from "./collectStructs/types";
import type { ParamFilterCriteria } from "./filter/filterParamArray2";
import { filterParams2 } from "./filter/filterParamArray2";
import type { PluginParamGroups } from "./filter/types";
import { isEmptyParamGroup } from "./filter/utils";

const merge = (set1: ReadonlySet<string>, set2: ReadonlySet<string>) => {
  return set1.union(set2);
};

export const ppp = <K extends ParamKinds>(
  plugin: PluginSchemaArray,
  kinds: ReadonlyArray<K>
) => {
  const structCollection: ReadonlyStructCollection = collectStructsByKinds(
    plugin.structs,
    kinds
  );

  const criteria: ParamFilterCriteria = {
    singleKinds: structCollection.targetKinds,
    arrayKinds: structCollection.targetArrayKinds,
    structNames: merge(
      structCollection.matchedStructs,
      structCollection.nestedStructs
    ),
  };

  const paramGroup = filterParams2(plugin.params, criteria);

  const commandGroup = filterPluginCommand(plugin.commands, criteria);

  return {
    paramGroup,
    commandGroup,
  };
};

export const filterPluginCommand = (
  commandList: ReadonlyArray<PluginCommandSchemaArray>,
  criteria: ParamFilterCriteria
): PluginParamGroups[] => {
  return commandList.reduce<PluginParamGroups[]>((acc, cmd) => {
    const group = filterParams2(cmd.args, criteria);
    return isEmptyParamGroup(group) ? acc : acc.concat(group);
  }, []);
};

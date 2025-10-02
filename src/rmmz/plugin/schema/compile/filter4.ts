// import type { FilterdPlugin, Cmd2 } from "./filter2Type2";
// import { filterStructsEx, isEmptyParamGroup } from "./filter3";
// import { filterParams } from "./filterParamArray";
// import type { ParamKinds, PrimitiveParam, ScalaParam } from "./kinds";
// import type {
//   PluginSchemaArray,
//   PluginParam,
//   PluginCommandSchemaArray,
// } from "./kinds/core/types";

// const setTTT = (kinds: ReadonlyArray<ParamKinds>) => {
//   const arrayKinds = kinds.map((k) => `${k}[]` as const);
//   return new Set<ParamKinds | `${ParamKinds}[]`>([...kinds, ...arrayKinds]);
// };

// export const sss = (
//   plugin: PluginSchemaArray,
//   kinds: ReadonlyArray<ParamKinds>
// ) => {
//   const set = setTTT(kinds);
//   return ggg(plugin, (p): p is ScalaParam => set.has(p.kind));
// };

// type FnType<T extends PrimitiveParam> =
//   | ((param: PrimitiveParam, name: string) => boolean)
//   | ((param: PrimitiveParam, name: string) => param is T);

// const ggg = <T extends ScalaParam>(
//   plugin: PluginSchemaArray,
//   fn: FnType<T>
// ): FilterdPlugin => {
//   const structs = filterStructsEx(plugin.structs, (p): p is PluginParam<T> =>
//     fn(p.attr, p.name)
//   );

//   const structNames = new Set(structs.map((s) => s.struct));
//   const params = filterParams(plugin.params, structNames, fn);
//   const commands = filterCommandsEx(plugin.commands, structNames, fn);
//   return { params, structs, commands };
// };

// const filterCommandsEx = <
//   Fn extends (param: PrimitiveParam, name: string) => boolean
// >(
//   commands: PluginCommandSchemaArray<PrimitiveParam>[],
//   set: Pick<ReadonlySet<string>, "has">,
//   fn: Fn
// ): Cmd2[] => {
//   return commands.reduce((acc, cmd): Cmd2[] => {
//     const filtered = filterParams(cmd.args, set, fn);
//     return isEmptyParamGroup(filtered)
//       ? acc
//       : [
//           ...acc,
//           {
//             command: cmd.command,
//             desc: cmd.desc,
//             text: cmd.text,
//             args: filtered,
//           },
//         ];
//   }, []);
// };

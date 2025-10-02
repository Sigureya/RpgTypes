import { PluginParamGroups } from './filter2Type2';
import { PrimitiveParam, ScalaParam } from './kinds';
import { PluginParam } from './kinds/core/types';
export declare const filterParams: <Fn extends (param: ScalaParam, name: string) => boolean>(params2: PluginParam<PrimitiveParam>[], set: Pick<ReadonlySet<string>, "has">, fn: Fn) => PluginParamGroups;

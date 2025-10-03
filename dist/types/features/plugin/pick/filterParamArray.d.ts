import { ScalaParam, PluginParam, PrimitiveParam } from '../../../rmmz/plugin';
import { PluginParamGroups } from './filter2Type2';
export declare const filterParams: <Fn extends (param: ScalaParam, name: string) => boolean>(params2: PluginParam<PrimitiveParam>[], set: Pick<ReadonlySet<string>, "has">, fn: Fn) => PluginParamGroups;

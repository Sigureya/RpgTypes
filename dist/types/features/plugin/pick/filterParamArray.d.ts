import { ScalaParam, PluginParam, PrimitiveParam } from '../../../rmmz/plugin';
import { PluginParamGroups } from './newVersion/filter/types';
export declare const filterParams: <Fn extends (param: ScalaParam, name: string) => boolean>(params2: PluginParam<PrimitiveParam>[], set: Pick<ReadonlySet<string>, "has">, fn: Fn) => PluginParamGroups;

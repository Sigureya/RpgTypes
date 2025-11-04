import { PluginSchemaArray, PluginTextSchema, PluginParamEx, PluginVariableSchema, RpgVariableParam, RpgVariableArrayParam, PluginFileParamsSchema } from './types';
export declare const filterPluginSchemaByStringParam: (schema: PluginSchemaArray) => PluginTextSchema;
export declare const filterPluginSchemaByNumberParam: (schema: PluginSchemaArray) => import('./types').PluginSchemaArrayEx2<PluginParamEx<RpgVariableParam | RpgVariableArrayParam | import('./types').RpgSwitchParam | import('./types').RpgSwitchArrayParam | import('./types').NumberParam | import('./types').NumberArrayParam | import('./types').RpgDataIdParam | import('./types').RpgDataIdArrayParam | import('./types').SystemDataIdParam | import('./types').SystemDataIdArrayParam, string>>;
export declare const filterPluginSchemaByVariableParam: (schema: PluginSchemaArray) => PluginVariableSchema;
export declare const filterPluginSchemaByFileParam: (schema: PluginSchemaArray) => PluginFileParamsSchema;

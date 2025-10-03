export interface PluginStructBodyTemplate<Param> {
    params: {
        [key: string]: Param;
    };
}

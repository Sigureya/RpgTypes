export interface RmmzParamCore_Option {
    value: string;
    option: string;
}
export interface RmmzParamCore_Select {
    type: "select";
    default: string;
    options: RmmzParamCore_Option[];
}
export interface X_MetaParamCore_Select {
    options: RmmzParamCore_Option[];
}

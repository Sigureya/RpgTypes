import { StructCompileLog } from './compileLog';
import { StructParam } from './plugin';
import { AnyParamSchema } from './pluginMeta/anyParamSchema';
import { CompileContext } from './pluginMeta/compileOption';
export declare const compileStructDetail: <T>(path: string, title: string, props: Record<string, StructParam>, ctx: CompileContext) => {
    schema: {
        type: "object";
        title: string;
        properties: Record<string, AnyParamSchema>;
        required: string[];
        additionalProperties: false;
    };
    logs: StructCompileLog<StructParam>[];
};

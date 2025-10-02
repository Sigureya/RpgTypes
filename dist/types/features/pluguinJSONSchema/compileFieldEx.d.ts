import { StructParam } from '../../rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx';
import { StructCompileLog } from './compileLog';
import { AnyParamSchema } from './scala/meta/anyParamSchema';
import { CompileContext } from './scala/meta/compileOption';
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

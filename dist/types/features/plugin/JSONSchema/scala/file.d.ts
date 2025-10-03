import { FileParam } from '../../../../rmmz/plugin';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileFileField: (data: FileParam) => {
    title?: string;
    description?: string;
    default?: string | undefined;
    type: "string";
};
export declare const compileFileFieldWithXparam: (data: FileParam) => JSONSchemaTypeWithRpgParam<FileParam>;

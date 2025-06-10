import { FormatArrayIndexCompiled } from './array';
import { FormatItemMapper, FormatItemMapperCompiled } from './arrayWithKind';
import { FormatArrayInput, FormatProperties, FormatPropertiesCompiled } from './direct';
import { SourceIdentifier } from './sourceIdentifier';
export interface FormatRule<T> {
    itemMapper?: FormatItemMapper<T>;
    itemMappers?: FormatItemMapper<T>[];
    fallbackFormat?: Partial<FallbackForamt>;
    placeHolder?: FormatProperties<T>;
    arrayIndex?: FormatArrayInput<T, SourceIdentifier>[];
}
export interface FallbackForamt {
    text: string;
    label: string;
}
export interface FormatRuleCompiled<T> {
    itemMappers: FormatItemMapperCompiled<T>[];
    fallbackFormat: FallbackForamt;
    properties: FormatPropertiesCompiled<T>;
    arrayIndex: FormatArrayIndexCompiled<T, SourceIdentifier>[];
}
export interface FormatCompiledSimple {
    patternCompiled: string;
    label: string;
}

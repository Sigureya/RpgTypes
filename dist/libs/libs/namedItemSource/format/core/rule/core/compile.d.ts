import { FormatArrayIndexCompiled } from './array';
import { FormatArrayInput, FormatProperties, FormatPropertiesCompiled } from './direct';
import { SourceIdentifier } from './sourceIdentifier';
export declare const compileFormatPropeties: <T>(props: FormatProperties<T>) => FormatPropertiesCompiled<T>;
export declare const compileArrayPlaceholder: <T, Source extends string | number>(input: FormatArrayInput<T, Source>) => FormatArrayIndexCompiled<T, Source>;
export declare const compileArrayPlaceholderEX: <T>(input: FormatArrayInput<T, SourceIdentifier>) => FormatArrayIndexCompiled<T, SourceIdentifier>;

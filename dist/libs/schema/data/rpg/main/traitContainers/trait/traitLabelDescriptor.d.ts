import { SourceIdentifier } from '../../../../..';
import { TraitLabelResolved } from './options';
import { Trait } from './types';
export declare class TraitLabelDescriptor implements TraitLabelResolved {
    readonly code: number;
    readonly label: string;
    readonly format: string;
    readonly dataSource?: Readonly<SourceIdentifier> | undefined;
    constructor(code: number, label: string, format: string, dataSource?: Readonly<SourceIdentifier> | undefined);
    match(trait: Trait): boolean;
    testTraitCode(trait: Trait): void;
    formatText(trait: Trait, resolveName: (dataSource: Readonly<SourceIdentifier>, dataId: number) => string): string;
    requiresValue(): boolean;
    requiresName(): boolean;
    invalidPlaceHolder(): string[];
    isFormatValidForDataSource(): boolean;
    diagnose(): TraitLabelDiagnostic;
}
export interface TraitLabelDiagnostic {
    format: string;
    code: number;
    label: string;
    hasError: boolean;
    missingDataSourceError: boolean;
    sourceMismatchError: boolean;
    invalidPlaceHolders: string[];
}

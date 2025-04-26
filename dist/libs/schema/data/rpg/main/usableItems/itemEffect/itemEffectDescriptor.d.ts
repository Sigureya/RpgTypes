import { SourceIdentifier } from '../../../../../namedItemSource';
import { EffectDefinitionResolved } from './labels';
import { ItemEffect } from './itemEffect';
export declare class ItemEffectDescriptor implements EffectDefinitionResolved {
    readonly codeId: number;
    readonly label: string;
    readonly format: string;
    readonly description: string;
    readonly dataSource?: SourceIdentifier | undefined;
    constructor(codeId: number, label: string, format: string, description: string, dataSource?: SourceIdentifier | undefined);
    formatText(effect: ItemEffect, resolveName: (dataSource: Readonly<SourceIdentifier>, dataId: number) => string): string;
    requiresValue1(): boolean;
    requiresValue2(): boolean;
    requiresName(): boolean;
    invalidPlaceHolder(): string[];
    isFormatValidForDataSource(): boolean;
}

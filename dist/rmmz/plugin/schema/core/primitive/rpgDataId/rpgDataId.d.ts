import { SourceIdentifier } from '../../../../../../libs/namedItemSource';
import { DataKindUnion } from './rpgDataTypesNames';
import { RmmzParamCore_DataId } from './types';
export declare const dataIdMetaParam: (data: RmmzParamCore_DataId<DataKindUnion>) => SourceIdentifier;
export declare const dataIndexSchema: () => {
    type: "object";
    required: ("type" | "default")[];
    properties: {
        default: {
            type: "integer";
            default: number;
            minimum: number;
        };
        type: {
            type: "string";
            enum: ("item" | "weapon" | "armor" | "skill" | "state" | "common_event" | "actor" | "class" | "troop")[];
        };
    };
};

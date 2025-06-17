import { DataKindUnion } from './rpgDataTypesNames';
export declare const rmmzDataTypes: () => ("item" | "weapon" | "armor" | "skill" | "state" | "common_event" | "actor" | "class" | "troop")[];
export declare const rmmzDataTypeArrays: () => `${DataKindUnion}[]`[];

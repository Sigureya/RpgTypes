import { JSONSchemaType } from 'ajv';
import { Schema } from 'jsonschema';
type DiscriminatorCore<Base extends object, Kind extends string | number, PropName extends keyof Base, AllTypes> = {
    [K in Kind]: JSONSchemaType<Extract<AllTypes, {
        [P in PropName]: K;
    }>>;
};
export type DiscriminatedUnionSchemaType<Base extends object, Kind extends string | number, PropName extends keyof Base, AllTypes, BaseName extends string = "base"> = {
    oneOf: {
        allOf: [
            Omit<Schema, "properties"> & DiscriminatorCore<Base, Kind, PropName, AllTypes>[Kind],
            {
                $ref: `#/definitions/${BaseName}`;
            }
        ];
    }[];
    definitions: {
        [K in BaseName]: JSONSchemaType<Base> & Schema;
    };
} & Omit<Schema, "definitions" | "oneOf">;
export {};

import { JSONSchemaType } from 'ajv';
import { Schema } from 'jsonschema';
type DiscriminatorCore<Base extends object, Kind extends string | number, PropName extends keyof Base, AllTypes extends Base> = {
    [K in Kind]: JSONSchemaType<Extract<AllTypes, {
        [P in PropName]: K;
    }>>;
}[Kind];
export type DiscriminatedUnionSchemaType3<Base extends object, Kind extends string | number, PropName extends keyof Base, AllTypes extends Base> = {
    type: "object";
    oneOf: DiscriminatorCore<Base, Kind, PropName, AllTypes>[];
    discriminator: {
        propertyName: PropName;
    };
} & Omit<Schema, "oneOf">;
export {};

import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";

export type DiscriminatorCore<
  Base extends object,
  Kind extends string,
  PropName extends keyof Base,
  AllTypes extends Base
> = {
  [K in Kind]:
    | Schema & JSONSchemaType<Extract<AllTypes, { [P in PropName]: K }>>;
};

export type UnionJSONSchemaType<
  Base extends object,
  Kind extends string,
  PropName extends keyof Base,
  AllTypes extends Base
> = {
  type: "object";
  discriminator: {
    propertyName: PropName;
  };
  oneOf: Array<DiscriminatorCore<Base, Kind, PropName, AllTypes>[Kind]>;
};
export type UnionJSONSchemaType2<
  Base extends object,
  Kind extends string,
  PropName extends keyof Base,
  AllTypes extends Base
> = {
  type: "object";
  discriminator: {
    propertyName: PropName;
  };
  oneOf: Array<DiscriminatorCore<Base, Kind, PropName, AllTypes>[Kind]>;
};

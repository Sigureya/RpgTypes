import type { JSONSchemaType } from "ajv";
import type { RmmzParamTextFields } from "../annotationBase";

export const makeRmmzParamTextSchemaOld = () =>
  ({
    desc: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    text: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    parent: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
  } satisfies Record<
    keyof RmmzParamTextFields,
    JSONSchemaType<string | undefined>
  >);
const makeRmmzParamTextSchema = () => {};

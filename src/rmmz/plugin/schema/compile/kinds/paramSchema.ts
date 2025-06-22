import type { JSONSchemaType } from "ajv";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import { makeSchemaBooleanParam } from "./boolean";
import { rmmzSchemaComboParam } from "./combo";
import type {
  KindBase,
  KindOfBoolean,
  KindOfCombo,
  KindOfNumber,
} from "./core/primitiveParams";
import { rmmzSchemaNumberParam } from "./numbers";

const s: DiscriminatedUnionSchemaType3<
  KindBase,
  string,
  "kind",
  KindOfNumber | KindOfCombo | KindOfBoolean
> = {
  type: "object",
  discriminator: {
    propertyName: "kind",
  },
  oneOf: [
    rmmzSchemaNumberParam() satisfies JSONSchemaType<KindOfNumber>,
    rmmzSchemaComboParam() satisfies JSONSchemaType<KindOfCombo>,
    makeSchemaBooleanParam() satisfies JSONSchemaType<KindOfBoolean>,
  ],
};

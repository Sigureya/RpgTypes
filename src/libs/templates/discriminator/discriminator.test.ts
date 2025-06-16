import { describe, expect, test } from "vitest";
import Ajv from "ajv";
import type { UnionJSONSchemaType } from "./discriminator";

interface Animal {
  kind: string;
  name: string;
}

interface Cat extends Animal {
  kind: "cat";
  meowVolume: number;
}

interface Dog extends Animal {
  kind: "dog";
  barkSound: string;
}

interface Lion extends Animal {
  kind: "cat";
  roarVolume: number;
}

type AnimalKindString = "cat" | "dog";

type AnimalDiscriminator = UnionJSONSchemaType<
  Animal,
  AnimalKindString,
  "kind",
  Cat | Dog | Lion
>;

const animalDiscriminator = {
  type: "object",
  discriminator: {
    propertyName: "kind",
  },
  oneOf: [
    {
      required: ["kind", "meowVolume"],
      additionalProperties: false,
      type: "object",
      properties: {
        kind: { type: "string", const: "cat" },
        name: { type: "string" },
        meowVolume: { type: "number" },
      },
    },
    {
      required: ["kind", "barkSound"],
      additionalProperties: false,
      type: "object",
      properties: {
        kind: { type: "string", const: "dog" },
        name: { type: "string" },
        barkSound: { type: "string" },
      },
    },
  ],
} satisfies AnimalDiscriminator;

describe("", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const validate = ajv.compile(animalDiscriminator);
  test("validates cat object", () => {
    const cat: Cat = { kind: "cat", meowVolume: 5, name: "tama" };
    expect(cat).toSatisfy(validate);
  });

  test("validates dog object", () => {
    const dog: Dog = { kind: "dog", barkSound: "woof", name: "pochi" };
    expect(dog).toSatisfy(validate);
  });

  test("", () => {
    const lion: Lion = { kind: "cat", roarVolume: 10, name: "simba" };
    expect(lion).not.toSatisfy(validate);
  });
});

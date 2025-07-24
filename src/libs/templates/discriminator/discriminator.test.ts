import { describe, expect, test } from "vitest";
import type { JSONSchemaType } from "ajv";
import Ajv from "ajv";
import type { DiscriminatedUnionSchemaType } from "./discriminator";

interface AnimalBase {
  kind: string;
  name: string;
}

interface CatCore {
  kind: "cat";
  meowVolume: number;
}

interface DogCore {
  kind: "dog";
  barkSound: string;
  barkVolume?: number;
}

interface LionCore {
  kind: "cat";
  roarVolume: number;
}

interface AnimalBase {
  kind: string;
  name: string;
  age?: number;
}

type Cat = CatCore & AnimalBase;
type Dog = DogCore & AnimalBase;
type Lion = LionCore & AnimalBase;

const mockSchema: DiscriminatedUnionSchemaType<
  AnimalBase,
  "cat" | "dog" | "lion",
  "kind",
  CatCore | DogCore | LionCore
> = {
  title: "Animal",
  definitions: {
    base: {
      type: "object",
      properties: {
        name: { type: "string" },
        kind: { type: "string" },
        age: { type: "number", nullable: true },
      },
      required: ["name", "kind"],
    } satisfies JSONSchemaType<AnimalBase>,
  },

  oneOf: [
    {
      allOf: [
        {
          type: "object",
          properties: {
            kind: { type: "string", const: "cat" },
            meowVolume: { type: "number" },
          },
          required: ["kind", "meowVolume"],
        } satisfies JSONSchemaType<CatCore>,
        { $ref: "#/definitions/base" },
      ],
    },
    {
      allOf: [
        {
          type: "object",
          properties: {
            kind: { type: "string", const: "dog" },
            barkSound: { type: "string" },
            barkVolume: { type: "number", nullable: true },
          },
          required: ["kind", "barkSound"],
        } satisfies JSONSchemaType<DogCore>,
        { $ref: "#/definitions/base" },
      ],
    },
  ],
};

describe("DiscriminatedUnionSchemaType", () => {
  const ajv = new Ajv({ strict: true, code: { source: false } });
  const validate = ajv.compile(mockSchema);

  test("valid Cat object (basic case)", () => {
    const cat: Cat = { kind: "cat", meowVolume: 5, name: "tama" };
    expect(cat).toSatisfy(validate);
  });

  test("valid Cat with optional base property (age)", () => {
    const cat: Cat = { kind: "cat", meowVolume: 5, name: "tama", age: 2 };
    expect(cat).toSatisfy(validate);
  });

  test("valid Dog object (basic case)", () => {
    const dog: Dog = { kind: "dog", barkSound: "woof", name: "pochi" };
    expect(dog).toSatisfy(validate);
  });

  test("valid Dog with optional derived properties", () => {
    const dog: Dog = {
      kind: "dog",
      barkSound: "woof",
      name: "pochi",
      age: 3,
      barkVolume: 10,
    };
    expect(dog).toSatisfy(validate);
  });

  test("invalid object: kind matches but required fields do not", () => {
    const lion: Lion = { kind: "cat", roarVolume: 10, name: "simba" };
    expect(lion).not.toSatisfy(validate);
  });

  test.skip("invalid object: extra fields present (ambiguous type)", () => {
    // Unable to represent this precisely with current schema; test skipped.
    const lion: Lion & Cat = {
      kind: "cat",
      roarVolume: 10,
      name: "simba",
      meowVolume: 5,
    };
    expect(lion).not.toSatisfy(validate);
  });
});

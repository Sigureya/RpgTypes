import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type {
  KindOfFile,
  KindOfSelect,
  KindOfString,
  KindOfCombo,
} from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import {
  makeComboField,
  makeFileField,
  makeSelectField,
  makeStringField,
  makeComboFieldWithXparam,
  makeFileFieldWithXparam,
  makeSelectFieldWithXparam,
  makeStringFieldWithXparam,
} from "./string";

describe("makeStringField", () => {
  test("should create a string field schema", () => {
    const data: KindOfString = {
      kind: "string",
      default: "defaultString",
      desc: "A string field",
      text: "String Field",
    };
    const schema = makeStringField(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultString",
      title: "String Field",
      description: "A string field",
    } satisfies JSONSchemaType<string>);
  });
});

describe("makeSelectField", () => {
  test("should create a select field schema", () => {
    const data: KindOfSelect = {
      kind: "select",
      default: "option1",
      desc: "A select field",
      text: "Select Field",
      options: [
        { value: "option1", option: "Option 1" },
        { value: "option2", option: "Option 2" },
      ],
    };
    const schema = makeSelectField(data);
    expect(schema).toEqual({
      type: "string",
      default: "option1",
      title: "Select Field",
      description: "A select field",
      enum: ["option1", "option2"],
    } satisfies JSONSchemaType<string>);
  });
});

describe("makeComboField", () => {
  test("should create a combo field schema", () => {
    const data: KindOfCombo = {
      kind: "combo",
      default: "defaultCombo",
      desc: "A combo field",
      text: "Combo Field",
      options: ["option1", "option2", "option3"],
    };
    const schema = makeComboField(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultCombo",
      title: "Combo Field",
      description: "A combo field",
    } satisfies JSONSchemaType<string>);
  });
});

describe("makeFileField", () => {
  test("should create a file field schema", () => {
    const data: KindOfFile = {
      kind: "file",
      default: "defaultFile",
      desc: "A file field",
      text: "File Field",
      dir: "img/faces",
    };
    const schema = makeFileField(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultFile",
      title: "File Field",
      description: "A file field",
    } satisfies JSONSchemaType<string>);
  });
});

describe("makeStringFieldWithXparam", () => {
  test("should create a string field schema with x-rpg-param", () => {
    const data: KindOfString = {
      kind: "string",
      default: "defaultString",
      desc: "A string field with x-rpg-param",
      text: "String Field with Xparam",
    };
    const schema = makeStringFieldWithXparam(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultString",
      title: "String Field with Xparam",
      description: "A string field with x-rpg-param",
      "x-rpg-param": {
        kind: "string",
        data: {},
      },
    } satisfies JSONSchemaTypeWithRpgParam<string>);
  });
});

describe("makeSelectFieldWithXparam", () => {
  test("should create a select field schema with x-rpg-param", () => {
    const data: KindOfSelect = {
      kind: "select",
      default: "option1",
      desc: "A select field with x-rpg-param",
      text: "Select Field with Xparam",
      options: [
        { value: "option1", option: "Option 1" },
        { value: "option2", option: "Option 2" },
      ],
    };
    const schema = makeSelectFieldWithXparam(data);
    expect(schema).toEqual({
      type: "string",
      default: "option1",
      title: "Select Field with Xparam",
      description: "A select field with x-rpg-param",
      enum: ["option1", "option2"],
      "x-rpg-param": {
        kind: "select",
        data: {},
      },
    } satisfies JSONSchemaTypeWithRpgParam<string>);
  });
});

describe("makeComboFieldWithXparam", () => {
  test("should create a combo field schema with x-rpg-param", () => {
    const data: KindOfCombo = {
      kind: "combo",
      default: "defaultCombo",
      desc: "A combo field with x-rpg-param",
      text: "Combo Field with Xparam",
      options: ["option1", "option2", "option3"],
    };
    const schema = makeComboFieldWithXparam(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultCombo",
      title: "Combo Field with Xparam",
      description: "A combo field with x-rpg-param",
      "x-rpg-param": {
        kind: "combo",
        data: {},
      },
    } satisfies JSONSchemaTypeWithRpgParam<string>);
  });
});

describe("makeFileFieldWithXparam", () => {
  test("should create a file field schema with x-rpg-param", () => {
    const data: KindOfFile = {
      kind: "file",
      default: "defaultFile",
      desc: "A file field with x-rpg-param",
      text: "File Field with Xparam",
      dir: "img/faces",
    };
    const schema = makeFileFieldWithXparam(data);
    expect(schema).toEqual({
      type: "string",
      default: "defaultFile",
      title: "File Field with Xparam",
      description: "A file field with x-rpg-param",
      "x-rpg-param": {
        kind: "file",
        data: {},
      },
    } satisfies JSONSchemaTypeWithRpgParam<string>);
  });
});

import { describe, expect, test } from "vitest";
import { toArrayPluginParam, toObjectPluginParams } from "./convert";
import type {
  PluginParam,
  PluginParamEx,
  PrimitiveParam,
  PrimitiveStructParams,
  ScalaParam,
  ToObjectParams,
} from "./types";

interface MockStruct {
  name: string;
  num: number;
  isActive: boolean;
}

interface MockStruct2 {
  title: string;
  count: number;
  isEnabled: boolean;
  values: number[];
}

const nameSort = <P extends PluginParam>(params: ReadonlyArray<P>) => {
  return params.toSorted((a, b) => (a.name < b.name ? -1 : 1));
};

describe("", () => {
  const objectParams: ToObjectParams<ScalaParam, keyof MockStruct> = {
    name: { kind: "string", default: "defaultName" },
    num: { kind: "number", default: 100 },
    isActive: { kind: "boolean", default: false },
  };
  const arrayParams: PluginParamEx<ScalaParam, keyof MockStruct>[] = [
    { name: "name", attr: { kind: "string", default: "defaultName" } },
    { name: "num", attr: { kind: "number", default: 100 } },
    { name: "isActive", attr: { kind: "boolean", default: false } },
  ];
  test("toObjectPluginParams converts array to object", () => {
    const result = toObjectPluginParams(arrayParams);
    expect(result).toEqual(objectParams);
  });

  test("toArrayPluginParam converts object to array", () => {
    type T = PluginParamEx<ScalaParam, keyof MockStruct>;
    const result: T[] = toArrayPluginParam(objectParams);
    expect(nameSort(result)).toEqual(nameSort(arrayParams));
  });
});

describe("", () => {
  const objectParams: PrimitiveStructParams<MockStruct2> = {
    count: { kind: "number", default: 0 },
    isEnabled: { kind: "boolean", default: true },
    title: { kind: "string", default: "defaultTitle" },
    values: { kind: "number[]", default: [] },
  };
  const arrayParams: PluginParamEx<PrimitiveParam, keyof MockStruct2>[] = [
    { name: "title", attr: { kind: "string", default: "defaultTitle" } },
    { name: "count", attr: { kind: "number", default: 0 } },
    { name: "isEnabled", attr: { kind: "boolean", default: true } },
    { name: "values", attr: { kind: "number[]", default: [] } },
  ];
  test("toObjectPluginParams converts array to object", () => {
    const result = toObjectPluginParams(arrayParams);
    expect(result).toEqual(objectParams);
  });
  test("toArrayPluginParam converts object to array", () => {
    type T = PluginParamEx<PrimitiveParam, keyof MockStruct2>;
    const result: T[] = toArrayPluginParam(objectParams);
    expect(nameSort(result)).toEqual(nameSort(arrayParams));
  });
});

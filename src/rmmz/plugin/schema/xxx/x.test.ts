import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { fn } from "./fn";

const input = `/*:
 * @target MZ
 * @plugindesc サンプルプラグイン
 * @param Speed
 * @text 移動速度
 * @type number
 * @default 4
 *
 * @param ActorName
 * @text 主人公の名前
 * @type string
 * @default アレックス
 */`;

interface XXX {
  Speed: number;
  ActorName: string;
}

const expectedOutput = {
  type: "object",
  properties: {
    Speed: {
      type: "number",
      title: "移動速度",
      default: 4,
    },
    ActorName: {
      type: "string",
      title: "主人公の名前",
      default: "アレックス",
    },
  },
  required: ["Speed", "ActorName"],
} satisfies JSONSchemaType<XXX>;

const input2 = `/*:
 * @target MZ
 * @plugindesc サンプルプラグイン
 * @param x
 * @text x座標
 * @type number
 * @default 0
 *
 * @param y
 * @text y座標
 * @type number
 * @default 0
 */`;

interface XY {
  x: number;
  y: number;
}

const expectedOutput2 = {
  type: "object",
  properties: {
    x: {
      type: "number",
      title: "x座標",
      default: 0,
    },
    y: {
      type: "number",
      title: "y座標",
      default: 0,
    },
  },
  required: ["x", "y"],
} satisfies JSONSchemaType<XY>;

describe("", () => {
  test("", () => {
    const result = fn(input);
    expect(result).toEqual(expectedOutput);
  });
  test("", () => {
    const result = fn(input2);
    expect(result).toEqual(expectedOutput2);
  });
});

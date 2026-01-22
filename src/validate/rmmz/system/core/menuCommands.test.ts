import { describe, test, expect } from "vitest";
import type {
  MenuCommandsEnabled,
  MenuCommandsEnabledArray,
} from "@RpgTypes/rmmz";
import {
  makeMenuCommandsEnabled,
  makeMenuCommandsEnabledFromArray,
} from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED } from "./menuCommands";

const ajv = new Ajv({ strict: false });
const validate = ajv.compile(SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED);

const testRoundTrip = (caseName: string, param: MenuCommandsEnabled) => {
  const array: MenuCommandsEnabledArray = makeMenuCommandsEnabled(param);
  test(caseName, () => {
    const object: MenuCommandsEnabled = makeMenuCommandsEnabledFromArray(array);
    expect(param).toEqual(object);
  });
  test(`${caseName} - validate`, () => {
    const isValid = validate(array);
    expect(isValid).toBe(true);
  });
};

describe("MenuCommandsEnabledArray length validation", () => {
  test("invalid: array length is 5 (too short)", () => {
    expect([false, false, false, false, false]).not.toSatisfy(validate);
  });
  test("invalid: array length is 7 (too long)", () => {
    expect([false, false, false, false, false, false, false]).not.toSatisfy(
      validate,
    );
  });
  test("invalid: array length is 5 with all true", () => {
    expect([true, true, true, true, true]).not.toSatisfy(validate);
  });
  test("invalid: array length is 7 with all true", () => {
    expect([true, true, true, true, true, true, true]).not.toSatisfy(validate);
  });
});

describe("makeMenuCommandsEnabled", () => {
  test("returns all true when param is empty object", () => {
    const array = makeMenuCommandsEnabled({});
    expect(array).toEqual([true, true, true, true, true, true]);
    expect(array).toSatisfy(validate);
  });
  test("returns all true when all values are true", () => {
    const array = makeMenuCommandsEnabled({
      item: true,
      skill: true,
      equip: true,
      status: true,
      formation: true,
      save: true,
    });
    expect(array).toEqual([true, true, true, true, true, true]);
    expect(array).toSatisfy(validate);
  });
  test("returns all false when all values are false", () => {
    const array = makeMenuCommandsEnabled({
      item: false,
      skill: false,
      equip: false,
      status: false,
      formation: false,
      save: false,
    });
    expect(array).toEqual([false, false, false, false, false, false]);
    expect(array).toSatisfy(validate);
  });
  test("returns all true when param is undefined", () => {
    const array = makeMenuCommandsEnabled(undefined);
    expect(array).toEqual([true, true, true, true, true, true]);
    expect(array).toSatisfy(validate);
  });
  test("returns correct array when only one value is true (equip)", () => {
    const array = makeMenuCommandsEnabled({ equip: true });
    expect(array).toEqual([true, true, true, true, true, true]);
    expect(array).toSatisfy(validate);
  });
  test("returns correct array when only one value is false (item)", () => {
    const array = makeMenuCommandsEnabled({ item: false });
    expect(array).toEqual([false, true, true, true, true, true]);
    expect(array).toSatisfy(validate);
  });
  test("returns correct array when some values are set", () => {
    const array = makeMenuCommandsEnabled({ item: false, save: false });
    expect(array).toEqual([false, true, true, true, true, false]);
    expect(array).toSatisfy(validate);
  });
});

describe("makeMenuCommandsEnabled <-> makeMenuCommandsEnabledFromArray round trip", () => {
  testRoundTrip("item only true", {
    item: true,
    skill: false,
    equip: false,
    status: false,
    formation: false,
    save: false,
  });
  testRoundTrip("skill only true", {
    item: false,
    skill: true,
    equip: false,
    status: false,
    formation: false,
    save: false,
  });
  testRoundTrip("equip only true", {
    item: false,
    skill: false,
    equip: true,
    status: false,
    formation: false,
    save: false,
  });
  testRoundTrip("status only true", {
    item: false,
    skill: false,
    equip: false,
    status: true,
    formation: false,
    save: false,
  });
  testRoundTrip("formation only true", {
    item: false,
    skill: false,
    equip: false,
    status: false,
    formation: true,
    save: false,
  });
  testRoundTrip("save only true", {
    item: false,
    skill: false,
    equip: false,
    status: false,
    formation: false,
    save: true,
  });
  testRoundTrip("item and skill true", {
    item: true,
    skill: true,
    equip: false,
    status: false,
    formation: false,
    save: false,
  });
  testRoundTrip("all true", {
    item: true,
    skill: true,
    equip: true,
    status: true,
    formation: true,
    save: true,
  });
  testRoundTrip("all false", {
    item: false,
    skill: false,
    equip: false,
    status: false,
    formation: false,
    save: false,
  });
});

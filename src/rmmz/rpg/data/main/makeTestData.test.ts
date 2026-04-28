import { describe, test, expect } from "vitest";
import type { TestDataSourceWithNote } from "@RpgTypes/libs";
import {
  makeActorDataFromTestSoruce,
  makeArmorDataFromTestSoruce,
  makeClassDataFromTestSoruce,
  makeEnemyDataFromTestSoruce,
  makeItemDataFromTestSoruce,
  makeSkillDataFromTestSoruce,
  makeStateDataFromTestSoruce,
  makeWeaponDataFromTestSoruce,
} from "./makeTestData";

const source: TestDataSourceWithNote = {
  text: "test text",
  image: "test image",
  audio: "test audio",
  note: "test note",
};

describe("makeTestData", () => {
  test("makeActorDataFromTestSoruce", () => {
    const result = makeActorDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.battlerName).toBe(source.image);
    expect(result.characterName).toBe(source.image);
    expect(result.faceName).toBe(source.image);
    expect(result.profile).toBe(source.text);
    expect(result.nickname).toBe(source.text);
  });

  test("makeClassDataFromTestSoruce", () => {
    const result = makeClassDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
  });

  test("makeWeaponDataFromTestSoruce", () => {
    const result = makeWeaponDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.description).toBe(source.text);
  });
  test("makeArmorDataFromTestSoruce", () => {
    const result = makeArmorDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.description).toBe(source.text);
  });
  test("makeEnemyDataFromTestSoruce", () => {
    const result = makeEnemyDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.battlerName).toBe(source.image);
  });
  test("makeStateDataFromTestSoruce", () => {
    const result = makeStateDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.message1).toBe(source.text);
    expect(result.message2).toBe(source.text);
    expect(result.message3).toBe(source.text);
    expect(result.message4).toBe(source.text);
  });
  test("makeSkillDataFromTestSoruce", () => {
    const result = makeSkillDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.description).toBe(source.text);
  });
  test("makeItemDataFromTestSoruce", () => {
    const result = makeItemDataFromTestSoruce(source);
    expect(result.name).toBe(source.text);
    expect(result.note).toBe(source.note);
    expect(result.description).toBe(source.text);
  });
});

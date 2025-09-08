import { describe, test, expect } from "vitest";
import type { Data_System } from "@RpgTypes/rmmz/system";
import { makeSystemData } from "@RpgTypes/rmmz/system";
import { TextManager } from "@RpgTypes/rmmzMock/core/rmmz_managers";
import type { TextManager_Interface } from "./textManager";
const mockSystem: Data_System = makeSystemData({});

globalThis.$dataSystem = mockSystem;
declare global {
  var TextManager: TextManager_Interface;
  var $dataSystem: Data_System;
}

describe("TextManager", () => {
  test("exists", () => {
    expect(TextManager).toBeDefined();
    expect(mockSystem.terms.messages).toBeDefined();
  });

  test("actorDamage", () => {
    expect(mockSystem.terms.messages.actorDamage).toBeDefined();
    expect(TextManager.actorDamage).toBe(mockSystem.terms.messages.actorDamage);
  });
  test("actorRecovery", () => {
    expect(mockSystem.terms.messages.actorRecovery).toBeDefined();
    expect(TextManager.actorRecovery).toBe(
      mockSystem.terms.messages.actorRecovery
    );
  });
});

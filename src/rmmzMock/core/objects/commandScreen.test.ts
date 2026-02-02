import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { Rmmz_Message, Rmmz_Party } from "@RpgTypes/rmmzRuntime";

type FakeParty = Pick<Rmmz_Party, "inBattle">;
type FakeMessage = Pick<Rmmz_Message, "isBusy">;

describe("Rmmz_Message", () => {
  //    const command =Command_
  test.skip("commandFlashScreen", () => {});
});

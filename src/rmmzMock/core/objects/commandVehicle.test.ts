import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Rmmz_UnitPlayer,
  Rmmz_Variables,
  Rmmz_Vehicle,
} from "@RpgTypes/rmmzRuntime";

const MOCK_OLD_VALUE = 60;

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

interface FunctionKeys {
  vehicle: (keyof Rmmz_Vehicle)[];
  player: (keyof Rmmz_UnitPlayer)[];
}

interface TestCase {
  variableIds: number[];
}

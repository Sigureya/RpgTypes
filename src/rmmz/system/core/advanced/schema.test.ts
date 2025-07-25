import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { System_Advanced } from "./advanced";
import SCHEMA_SYSTEM_ADVANCED from "./schema";
const ajv = new Ajv();

const isSystemAdvanced = ajv.compile(SCHEMA_SYSTEM_ADVANCED);

describe("", () => {
  describe("normal case", () => {
    test("System_Advanced schema validation", () => {
      const mockAdopted: System_Advanced = {
        fallbackFonts: "Arial, sans-serif",
        fontSize: 16,
        gameId: 1,
        mainFontFilename: "main.ttf",
        numberFontFilename: "number.ttf",
        screenHeight: 1080,
        screenScale: 1,
        screenWidth: 1920,
        uiAreaHeight: 600,
        uiAreaWidth: 800,
        windowOpacity: 255,
      };
      expect(mockAdopted).toSatisfy(isSystemAdvanced);
    });
  });
});

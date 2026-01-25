import { describe, test, expect } from "vitest";
import { makeSystemData, type System_Advanced } from "@RpgTypes/rmmz/system";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_ADVANCED } from "./advanced";
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

    test("System_Advanced schema validation with picturesUpperLimit", () => {
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
        picturesUpperLimit: 200,
      };
      expect(mockAdopted).toSatisfy(isSystemAdvanced);
    });

    test("", () => {
      const data = makeSystemData({});
      expect(data.advanced).toSatisfy(isSystemAdvanced);
    });
  });
});

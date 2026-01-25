import { describe, test, expect } from "vitest";
import type {
  Data_System,
  Terms_CommandArray,
  Terms_GameCommands,
} from "@RpgTypes/rmmz";
import {
  makeSystemData,
  makeTermsCommandArray,
  makeTermsCommandArrayWithNulls,
  makeTermsCommandFromArray,
} from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY } from "./commands";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY);

describe("SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY", () => {
  test("should be a valid JSON schema function", () => {
    expect(validate).toBeTypeOf("function");
  });
  test("makeTermsCommand returns valid Terms_CommandArray with default values", () => {
    const validTermsCommandArray: Terms_CommandArray = makeTermsCommandArray(
      {},
    );
    expect(validate(validTermsCommandArray)).toBe(true);
  });
  test("invalid: array length is 25 (too short)", () => {
    const array = Array.from({ length: 25 }, () => "");
    expect(array).not.toSatisfy(validate);
  });
  test("valid: array length is 26 (just right)", () => {
    const array = Array.from({ length: 26 }, () => "");
    expect(validate(array)).toBe(true);
  });
  test("invalid: array length is 27 (too long)", () => {
    const array = Array.from({ length: 27 }, () => "");
    expect(array).not.toSatisfy(validate);
  });
  test("", () => {
    const array = makeTermsCommandArrayWithNulls({}, null);
    expect(array).toSatisfy(validate);
  });
  test("", () => {
    const data: Data_System = makeSystemData({});
    const termsCommandArray: Terms_CommandArray = data.terms.commands;
    expect(termsCommandArray).toSatisfy(validate);
  });
});

const testTermsCommandProperty = (
  key: keyof Terms_GameCommands,
  text: string,
) => {
  const terms: Partial<Terms_GameCommands> = {
    [key]: text,
  };
  const termsArray: Terms_CommandArray = makeTermsCommandArray(terms);
  const termsObject: Terms_GameCommands = makeTermsCommandFromArray(termsArray);
  test(`makeTermsCommandFromArray reconstructs ${key} = ${text}`, () => {
    expect(termsObject[key]).toBe(text);
  });
  test(`makeTermsCommand returns valid Terms_CommandArray when only ${key} is set`, () =>
    expect(validate(termsArray)).toBe(true));
};

describe("makeTermsCommand individual property assignment", () => {
  testTermsCommandProperty("fight", "Fight-0");
  testTermsCommandProperty("escape", "Escape-1");
  testTermsCommandProperty("attack", "Attack-2");
  testTermsCommandProperty("guard", "Guard-3");
  testTermsCommandProperty("item", "Item-4");
  testTermsCommandProperty("skill", "Skill-5");
  testTermsCommandProperty("equip", "Equip-6");
  testTermsCommandProperty("status", "Status-7");
  testTermsCommandProperty("formation", "Formation-8");
  testTermsCommandProperty("save", "Save-9");
  testTermsCommandProperty("gameEnd", "Game End-10");
  testTermsCommandProperty("options", "Options-11");
  testTermsCommandProperty("weapon", "Weapon-12");
  testTermsCommandProperty("armor", "Armor-13");
  testTermsCommandProperty("keyItem", "Key Item-14");
  testTermsCommandProperty("equip2", "Equip2-15");
  testTermsCommandProperty("optimize", "Optimize-16");
  testTermsCommandProperty("clear", "Clear-17");
  testTermsCommandProperty("newGame", "New Game-18");
  testTermsCommandProperty("continueGame", "Continue-19");
  testTermsCommandProperty("toTitle", "To Title-21");
  testTermsCommandProperty("cancel", "Cancel-22");
  testTermsCommandProperty("buy", "Buy-24");
  testTermsCommandProperty("sell", "Sell-25");
});

describe("makeTermsCommand with all properties set", () => {
  const termsArray: Terms_CommandArray = makeTermsCommandArray({
    fight: "A0",
    escape: "B1",
    attack: "C2",
    guard: "D3",
    item: "E4",
    skill: "F5",
    equip: "G6",
    status: "H7",
    formation: "I8",
    save: "J9",
    gameEnd: "K10",
    options: "L11",
    weapon: "M12",
    armor: "N13",
    keyItem: "O14",
    equip2: "P15",
    optimize: "Q16",
    clear: "R17",
    newGame: "S18",
    continueGame: "T19",
    toTitle: "U21",
    cancel: "V22",
    buy: "Y24",
    sell: "Z25",
  });
  test("makeTermsCommand returns valid Terms_CommandArray when all properties are set", () =>
    expect(validate(termsArray)).toBe(true));
  test("termsArray[0] is fight", () => expect(termsArray[0]).toBe("A0"));
  test("termsArray[1] is escape", () => expect(termsArray[1]).toBe("B1"));
  test("termsArray[2] is attack", () => expect(termsArray[2]).toBe("C2"));
  test("termsArray[3] is guard", () => expect(termsArray[3]).toBe("D3"));
  test("termsArray[4] is item", () => expect(termsArray[4]).toBe("E4"));
  test("termsArray[5] is skill", () => expect(termsArray[5]).toBe("F5"));
  test("termsArray[6] is equip", () => expect(termsArray[6]).toBe("G6"));
  test("termsArray[7] is status", () => expect(termsArray[7]).toBe("H7"));
  test("termsArray[8] is formation", () => expect(termsArray[8]).toBe("I8"));
  test("termsArray[9] is save", () => expect(termsArray[9]).toBe("J9"));
  test("termsArray[10] is gameEnd", () => expect(termsArray[10]).toBe("K10"));
  test("termsArray[11] is options", () => expect(termsArray[11]).toBe("L11"));
  test("termsArray[12] is weapon", () => expect(termsArray[12]).toBe("M12"));
  test("termsArray[13] is armor", () => expect(termsArray[13]).toBe("N13"));
  test("termsArray[14] is keyItem", () => expect(termsArray[14]).toBe("O14"));
  test("termsArray[15] is equip2", () => expect(termsArray[15]).toBe("P15"));
  test("termsArray[16] is optimize", () => expect(termsArray[16]).toBe("Q16"));
  test("termsArray[17] is clear", () => expect(termsArray[17]).toBe("R17"));
  test("termsArray[18] is newGame", () => expect(termsArray[18]).toBe("S18"));
  test("termsArray[19] is continue_", () => expect(termsArray[19]).toBe("T19"));
  test("termsArray[20] is empty string", () => expect(termsArray[20]).toBe(""));
  test("termsArray[21] is toTitle", () => expect(termsArray[21]).toBe("U21"));
  test("termsArray[22] is cancel", () => expect(termsArray[22]).toBe("V22"));
  test("termsArray[23] is empty string", () => expect(termsArray[23]).toBe(""));
  test("termsArray[24] is buy", () => expect(termsArray[24]).toBe("Y24"));
  test("termsArray[25] is sell", () => expect(termsArray[25]).toBe("Z25"));
});

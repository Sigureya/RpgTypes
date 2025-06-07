import { describe, test, expect } from "vitest";
import type { FormatRule } from "./core";

interface LearningSkill {
  actorId: number;
  skillId: number;
}

const rule: FormatRule<LearningSkill> = {
  itemMappers: [
    { placeHolder: "actor", dataIdKey: "actorId", kindKey: "actorId" },
  ],
};
test("", () => {
  expect(true).toBe(true);
});

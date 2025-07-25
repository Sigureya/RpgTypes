import { describe, test, expect } from "vitest";
import { makeActorData } from "./actor";
import type { Data_Actor } from "./types";
const validate = require("./actorValidate.cjs"); // Adjust the import based on your setup

const isDataActor = (data: unknown): data is Data_Actor => {
  return validate(data);
};

test("validate actor data", () => {
  const actor: Data_Actor = makeActorData();
  expect(actor).toSatisfy(isDataActor);
});

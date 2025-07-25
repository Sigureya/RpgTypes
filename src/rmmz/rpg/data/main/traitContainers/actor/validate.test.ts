import { describe, test, expect } from "vitest";
import { makeActorData } from "./actor";
import type { Data_Actor } from "./types";
const validate = require("./actorValidate.cjs"); // Adjust the import based on your setup

test("validate actor data", () => {
  const actor: Data_Actor = makeActorData();
  expect(validate(actor)).toBe(true);
});

// test("isDataActor2", () => {
//   const actor: Data_Actor = makeActorData();
//   expect(actor).toSatisfy(isDataActor2);
// });
// test("isDataActor2", () => {
//   expect({}).not.toSatisfy(isDataActor2);
// });

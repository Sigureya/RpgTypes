import { describe, test, expect } from "vitest";
import { makeActorData } from "./actor";
import type { Data_Actor } from "./types";
import { isDataActor2 } from "./validate";

test("isDataActor2", () => {
  const actor: Data_Actor = makeActorData();
  expect(actor).toSatisfy(isDataActor2);
});
test("isDataActor2", () => {
  expect({}).not.toSatisfy(isDataActor2);
});

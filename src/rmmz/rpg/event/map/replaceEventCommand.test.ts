import { describe, test, expect } from "vitest";
import type { MapEvent } from "./event";
import { repleaceMapEventCommands } from "./replcaeEventCommand";

describe("repleaceMapEventCommands", () => {
  test("should replace event commands in map events", () => {
    const events: MapEvent[] = [];
    const result = repleaceMapEventCommands(events, (list) => [...list]);
    expect(result).toEqual(events);
  });
});

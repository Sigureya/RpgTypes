import { test, expect, describe } from "vitest";
import { domainNames } from "./domainLabel";
import type { DomainName } from "./types";

describe("domainNames", () => {
  const mockDomain: Record<string, DomainName> = {
    domain1: { title: "Domain One" },
    domain2: { title: "Domain Two" },
    domain3: { title: "Domain Three" },
  };

  test("should return an array of domain names", () => {
    const result = domainNames(mockDomain);
    expect(result).toEqual([
      mockDomain.domain1.title,
      mockDomain.domain2.title,
      mockDomain.domain3.title,
    ]);
  });

  test("should handle empty objects", () => {
    const result = domainNames({});
    expect(result).toEqual([]);
  });

  test("should handle single entry objects", () => {
    const singleDomain = {
      domain1: { title: "Single Domain" } satisfies DomainName,
    };
    const result = domainNames(singleDomain);
    expect(result).toEqual(["Single Domain"]);
  });
});

import { test, expect, describe } from "vitest";
import { domainNames } from "./domainLabel";
import type { DomainName } from "./types";

describe("domainNames", () => {
  const mockDomain: Record<string, DomainName> = {
    domain1: { domainName: "Domain One" },
    domain2: { domainName: "Domain Two" },
    domain3: { domainName: "Domain Three" },
  };

  test("should return an array of domain names", () => {
    const result = domainNames(mockDomain);
    expect(result).toEqual([
      mockDomain.domain1.domainName,
      mockDomain.domain2.domainName,
      mockDomain.domain3.domainName,
    ]);
  });

  test("should handle empty objects", () => {
    const result = domainNames({});
    expect(result).toEqual([]);
  });

  test("should handle single entry objects", () => {
    const singleDomain = { domain1: { domainName: "Single Domain" } };
    const result = domainNames(singleDomain);
    expect(result).toEqual(["Single Domain"]);
  });
});

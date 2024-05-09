import fs from "fs";
import { jest } from "@jest/globals";

jest.mock("fs");

export const mockFsLib = (
  mockSystemJSON: object,
  options: { shouldError?: boolean } = {}
) => {
  if (options.shouldError) {
    (
      fs.readFileSync as jest.MockedFunction<typeof fs.readFileSync>
    ).mockImplementation(() => {
      throw new Error();
    });
  } else {
    (
      fs.readFileSync as jest.MockedFunction<typeof fs.readFileSync>
    ).mockReturnValue(JSON.stringify(mockSystemJSON));
  }
  const readFileSync = jest.spyOn(fs, "readFileSync");
  const writeFileSync = jest.spyOn(fs, "writeFileSync");
  return { readFileSync, writeFileSync };
};

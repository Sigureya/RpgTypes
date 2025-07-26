import path from "path";
import { AliasOptions } from "vite";

export const alias: AliasOptions = {
  "@RpgTypes/rmmz": path.resolve(__dirname, "src/rmmz"),
  "@RpgTypes/libs": path.resolve(__dirname, "src/libs"),
};

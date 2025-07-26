import path from "path";
import { AliasOptions } from "vite";

export const alias: AliasOptions = {
  "@RpgTypes": path.resolve(__dirname, "src"),
};

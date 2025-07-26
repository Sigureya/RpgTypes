import path from "path";
import { AliasOptions } from "vite";

export const alias: AliasOptions = {
  "@RpgTypes/eventCommand": path.resolve(__dirname, "src/rmmz/eventCommand"),
  "src/rmmz/eventCommand": path.resolve(__dirname, "src/rmmz/eventCommand"),
  "@RpgTypes/rpg": path.resolve(__dirname, "./src/rmmz/rpg"),

  "@RpgTypes/system": path.resolve(__dirname, "./src/rmmz/system"),
  "@RpgTypes": path.resolve(__dirname, "./src/libs"),
  src: path.resolve(__dirname, "./src/libs"),
};

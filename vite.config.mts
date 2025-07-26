import {
  BuildEnvironmentOptions,
  defineConfig,
  LibraryOptions,
  UserConfig,
} from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
import { validateSchemaPlugin } from "./build/validateSchemaPlugin";
declare const __dirname: string;

const libBuild = {
  entry: "./src/index.ts",
  outDir: "./dist",
  libName: "rpgTypes",
  exclude: [],
};

const buildMainLib: UserConfig = {
  build: {
    outDir: libBuild.outDir,
    lib: {
      entry: libBuild.entry,
      name: libBuild.libName,
      fileName: (format) => `${libBuild.libName}.${format}.js`,
    },
    sourcemap: true,

    minify: false,
    rollupOptions: {
      plugins: [terser({ output: { comments: false, max_line_len: 180 } })],
      external: (id) =>
        id.endsWith(".test.ts") ||
        ["ajv", "ajv-formats", "jsonschema"].includes(id),
      output: [
        {
          format: "es",
          entryFileNames: "rpgTypes.es.js",
          exports: "named",
        },
        {
          format: "cjs",
          entryFileNames: "rpgTypes.cjs.js",
          exports: "named",
        },
      ],
    },
  },
  resolve: {
    alias: {
      "@RpgTypes/eventCommand": path.resolve(
        __dirname,
        "src/rmmz/eventCommand"
      ),
      "@RpgTypes/rpg": path.resolve(__dirname, "./src/rmmz/rpg"),

      "@RpgTypes/system": path.resolve(__dirname, "./src/rmmz/system"),
      "@RpgTypes": path.resolve(__dirname, "./src/libs"),
      src: path.resolve(__dirname, "./src/libs"),
    },
  },
  plugins: [
    validateSchemaPlugin(),
    dts({
      outDir: libBuild.outDir,
      exclude: ["./**/*.test.ts", ...libBuild.exclude],
      //rollupTypes: true,
    }),
  ],
};
const buildValidate: UserConfig = {
  build: {
    outDir: "./dist/validate",
    lib: {
      entry: "./src/validate.ts", // 新しいエントリーポイント
      name: "validate",
      fileName: (format) => `validate.${format}.js`,
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: "validate.es.js",
          exports: "named",
        },
        {
          format: "cjs",
          entryFileNames: "validate.cjs.js",
          exports: "named",
        },
      ],
    },
  },
  plugins: [validateSchemaPlugin()],
};
const dummyBuiild = (): BuildEnvironmentOptions => ({
  outDir: "./dummy",
  lib: {
    entry: "./src/dummy.ts",
    formats: ["es"],
  },
  emptyOutDir: false,
});

export default defineConfig(({ mode }): UserConfig => {
  if (mode === "generateschema") {
    return buildValidate;
  }
  if (mode === "validate") {
    return {
      plugins: [validateSchemaPlugin()],

      build: dummyBuiild(),
    };
  }
  return buildMainLib;
});

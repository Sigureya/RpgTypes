import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
declare const __dirname: string;

const libBuild = {
  entry: "./src/index.ts",
  outDir: "./dist",
  libName: "rpgTypes",
  exclude: [],
};

export default defineConfig({
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
    dts({
      outDir: libBuild.outDir,
      exclude: ["./**/*.test.ts", ...libBuild.exclude],
    }),
  ],
});

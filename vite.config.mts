import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
declare const __dirname: string;
const libBuild = {
  entry: "./src/libs/index.ts",
  outDir: "./dist/libs",
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
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
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
    minify: false, // デバッグしやすくするため
  },
  resolve: {
    alias: {
      "src/libs": path.resolve(__dirname, "./src/libs"),
      "@RpgTypes": path.resolve(__dirname, "./src/libs"),
    },
  },
  plugins: [
    dts({
      outDir: libBuild.outDir,
      exclude: ["./**/*.test.ts", ...libBuild.exclude],
    }),
  ],
});

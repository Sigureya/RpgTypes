import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
import { validateSchemaPlugin } from "./build/validateSchemaPlugin";
import { alias } from "./viteAlias.mts";

const srcDir = path.resolve(__dirname, "src");

export default defineConfig(({ mode }) => {
  const isValidateMode = mode === "validate";
  const isGenerateSchemaMode = mode === "generateschema";

  const entryPoints = {
    main: path.resolve(srcDir, "index.ts"),
    app: path.resolve(srcDir, "app/index.ts"),
    libs: path.resolve(srcDir, "libs/index.ts"),
    rmmz: path.resolve(srcDir, "rmmz/index.ts"),
    validate: path.resolve(srcDir, "validate/rmmz/eventCommand/index.ts"),
  };

  return {
    build: {
      outDir: isValidateMode ? "./dist/validate" : "./dist",
      lib: {
        entry: entryPoints,
        formats: ["es", "cjs"],
      },
      sourcemap: true,
      minify: false,
      rollupOptions: {
        input: entryPoints,
        output: {
          entryFileNames: (chunkInfo) => {
            const name = chunkInfo.name;
            return `${name}/[name].[format].js`;
          },
          chunkFileNames: "shared/[name].[format].js",
          format: "es",
          exports: "named",
        },
        external: (id) =>
          id.endsWith(".test.ts") ||
          ["ajv", "ajv-formats", "jsonschema"].includes(id),
        plugins: [terser({ output: { comments: false, max_line_len: 180 } })],
      },
    },
    resolve: {
      alias: alias,
    },
    plugins: [
      validateSchemaPlugin(),
      dts({
        outDir: isValidateMode ? "./dist/validate" : "./dist/types",
        include: ["src/**/*.ts"],
        exclude: ["src/**/*.test.ts"],
        rollupTypes: false,
      }),
    ],
  };
});

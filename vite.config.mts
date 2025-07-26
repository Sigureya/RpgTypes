import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
import { validateSchemaPlugin } from "./build/validateSchemaPlugin";
import { alias } from "./viteAlias.mts";

const srcDir = path.resolve(__dirname, "src");

export default defineConfig(({ mode }) => {
  const entryPoints = {
    main: path.resolve(srcDir, "index.ts"),
    features: path.resolve(srcDir, "features/index.ts"),
    libs: path.resolve(srcDir, "libs/index.ts"),
    rmmz: path.resolve(srcDir, "rmmz/index.ts"),
    validate: path.resolve(srcDir, "validate/index.ts"),
  };

  return {
    build: {
      outDir: "./dist",
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
        outDir: "./dist/types",
        include: ["src/**/*.ts"],
        exclude: ["src/**/*.test.ts"],
        rollupTypes: false,
      }),
    ],
  };
});

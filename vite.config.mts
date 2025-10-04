import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
import { validateSchemaPlugin } from "./build/validateSchemaPlugin";
import { alias } from "./viteAlias.mts";

const srcDir = path.resolve(__dirname, "src");

const validateEntryPoints = () =>
  ["validate/rmmz/rpg", "validate/rmmz/eventCommand"].reduce(
    (acc, dir): Record<string, string> => {
      acc[dir] = path.resolve(srcDir, `${dir}/index.ts`);
      return acc;
    },
    {}
  );

export default defineConfig(({ mode }) => {
  const entryPoints: Record<string, string> = {
    ...validateEntryPoints(),
    main: path.resolve(srcDir, "index.ts"),
    features: path.resolve(srcDir, "features/index.ts"),
    libs: path.resolve(srcDir, "libs/index.ts"),
    rmmz: path.resolve(srcDir, "rmmz/index.ts"),
    "rmmz/plugin": path.resolve(srcDir, "rmmz/plugin/index.ts"),
  };

  return {
    build: {
      outDir: "./dist",
      lib: {
        entry: entryPoints,
        formats: ["es", "cjs"],
      },
      sourcemap: false,
      minify: true,
      rollupOptions: {
        input: entryPoints,
        output: {
          entryFileNames: (chunkInfo) => {
            const name = chunkInfo.name;
            if (name.startsWith("validate/")) {
              return "[name].[format].js";
            }
            if (name.startsWith("rmmz/")) {
              return "[name].[format].js";
            }

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

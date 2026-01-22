import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
import terser from "@rollup/plugin-terser";
import { validateSchemaPlugin } from "./build/validateSchemaPlugin";
import { alias } from "./viteAlias.mts";

const srcDir = path.resolve(__dirname, "src");

const validateEntryPoints = () => {
  const entries = [
    "validate/rmmz/rpg",
    "validate/rmmz/eventCommand",
    "validate/rmmz/system",
  ].map((dir): [string, string] => [
    dir,
    path.resolve(srcDir, `${dir}/index.ts`),
  ]);
  return Object.fromEntries(entries);
};

const rmmzModules = () => ({});

const externalModules = [
  "ajv",
  "ajv-formats",
  "jsonschema",
  "jsonpath-js",
  "@sigureya/rmmz-plugin-schema",
];

export default defineConfig(({ mode }) => {
  const entryPoints: Record<string, string> = {
    ...validateEntryPoints(),
    ...rmmzModules(),
    main: path.resolve(srcDir, "index.ts"),
    features: path.resolve(srcDir, "features/index.ts"),
    libs: path.resolve(srcDir, "libs/index.ts"),
    rmmz: path.resolve(srcDir, "rmmz/index.ts"),
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
          id.endsWith(".test.ts") || externalModules.includes(id),
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

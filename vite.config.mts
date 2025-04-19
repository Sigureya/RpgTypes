import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

declare const __dirname: string;
interface BuildSetting {
  libName: string;
  outDir: string;
  entry: string;
  exclude: string[];
}

const libBuild: BuildSetting = {
  entry: "./src/libs/index.ts",
  outDir: "./dist/libs",
  libName: "rpgTypes",

  exclude: ["**/mock/**/*"],
};

const modeMock: BuildSetting = {
  entry: "./src/mock/index.ts",
  outDir: "./dist/mock",
  libName: "rpgMocks",
  exclude: ["**/libs/**/*"],
};

export default defineConfig(({ mode }) => {
  const setting = mode === "mock" ? modeMock : libBuild;
  return {
    build: {
      outDir: setting.outDir,

      lib: {
        entry: setting.entry,
        name: setting.libName,
        fileName: (format) => `${setting.libName}.${format}.js`,
        formats: ["es", "cjs"],
      },
      sourcemap: true,
      rollupOptions: {
        external: (id) => id.endsWith(".test.ts"),
      },
    },

    resolve: {
      alias: {
        "@RpgTypes/schema": path.resolve(__dirname, "./src/libs/schema"),
        "@RpgType/utils": path.resolve(__dirname, "./src/libs/utils"),
      },
    },
    plugins: [
      dts({
        outDir: setting.outDir,
        exclude: ["./**/*.test.ts", ...setting.exclude],
      }),
    ],
  };
});

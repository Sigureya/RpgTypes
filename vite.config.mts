import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

declare const __dirname: string;
interface BuildSetting {
  libName: string;
  outDir: string;
  entry: string;
}

const libBuild: BuildSetting = {
  entry: "./src/index.ts",
  outDir: "./dist/libs",
  libName: "rpgTypes",
};

const modeMock: BuildSetting = {
  entry: "./src/mock/index.ts",
  outDir: "./dist/mock",
  libName: "rpgMocks",
};

export default defineConfig(() => {
  const setting = libBuild;
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
        exclude: ["./**/*.test.ts", "**/mock/**/*"],
      }),
    ],
  };
});

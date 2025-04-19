import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

declare const __dirname: string;
interface XX {
  libName: string;
  outDir: string;
  libFileName: string;
  entry: string;
}

const libBuild: XX = {
  entry: "./src/index.ts",
  outDir: "./dist/lib",
  libFileName: "rpgTypes",
  libName: "rpgTypes",
};

const modeMock: XX = {
  entry: "./src/mock/index.ts",
  outDir: "./dist/mock",
  libName: "rpgMocks",
  libFileName: "rpgMocks",
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
        "@RpgTypes/schema": path.resolve(__dirname, "./src/schema"),
        "@RpgType/utils": path.resolve(__dirname, "./src/utils"),
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

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

  exclude: [],
};

export default defineConfig(({ mode }) => {
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
        "src/libs": path.resolve(__dirname, "./src/libs"),
        "@RpgTypes": path.resolve(__dirname, "./src/libs"),
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

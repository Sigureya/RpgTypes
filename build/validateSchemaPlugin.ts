// build/plugins/validateSchemaPlugin.ts
import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import { PluginOption } from "vite";

const build = async (schemaPath: string): Promise<void> => {
  const fullPath = path.resolve(schemaPath);

  // e.g. person/person.schema.json → person/validatePerson.ts
  const parsed = path.parse(fullPath);
  const fileBase = parsed.name.replace(/\.schema$/, ""); // e.g. "person"

  const filename = `${fileBase}Validate`;
  async function writeCjsFile() {
    const schemaText = await fs.readFile(fullPath, "utf-8");
    const schemaJson = JSON.parse(schemaText);

    const ajv = new Ajv({
      code: { source: true, esm: false },
      strict: true,
    });
    const validate = ajv.compile(schemaJson);
    const standalone: string = standaloneCode(ajv, validate);

    const targetFile = path.join(parsed.dir, `${filename}.cjs`);

    await fs.writeFile(targetFile, standalone, "utf-8");
  }

  async function writeDtsFile() {
    const dtsFilename = path.join(parsed.dir, `${filename}.d.ts`);
    const dtsContent: string = [
      `declare const validate: (data: unknown) => boolean;`,
      "export = validate;",
      "// This file is auto-generated by the validateSchemaPlugin.",
    ].join("\n");
    await fs.writeFile(dtsFilename, dtsContent, "utf-8");
  }

  writeCjsFile();
  writeDtsFile();
};

export function validateSchemaPlugin(): PluginOption {
  return {
    name: "vite-plugin-validate-schema",
    apply: "build",
    enforce: "pre",

    async buildStart() {
      console.log("バリデーション関数の生成を開始...");
      const schemaPaths = await fg("src/**/!(*.d).schema.json");

      for (const schemaPath of schemaPaths) {
        build(schemaPath);
      }
      console.log("バリデーション関数の生成が完了しました。");
    },
  };
}

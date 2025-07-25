// build/plugins/validateSchemaPlugin.ts
import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import { PluginOption } from "vite";

const build = async (schemaPath: string) => {
  const fullPath = path.resolve(schemaPath);
  const schemaText = await fs.readFile(fullPath, "utf-8");
  const schemaJson = JSON.parse(schemaText);

  const ajv = new Ajv({ code: { source: true }, strict: true });
  const validate = ajv.compile(schemaJson);
  const standalone = standaloneCode(ajv, validate);

  // e.g. person/person.schema.json → person/validatePerson.ts
  const parsed = path.parse(fullPath);
  const fileBase = parsed.name.replace(/\.schema$/, ""); // e.g. "person"

  const targetFile = path.join(parsed.dir, `${fileBase}Validate.cjs`);
  const codeWithExport = standalone;

  await fs.writeFile(targetFile, codeWithExport, "utf-8");
  console.log(`✅ バリデーション関数を生成: ${targetFile}`);
};

export function validateSchemaPlugin(): PluginOption {
  return {
    name: "vite-plugin-validate-schema",
    apply: "build",
    enforce: "pre",

    async buildStart() {
      const schemaPaths = await fg("src/**/!(*.d).schema.json");

      for (const schemaPath of schemaPaths) {
        await build(schemaPath);
      }
    },
  };
}

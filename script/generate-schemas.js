import { globSync } from "fs";
// import fg from "fast-glob";
// import path from "path";
// import fs from "fs/promises";
// import { pathToFileURL } from "url";
// import Ajv from "ajv";
// import standalone from "ajv/dist/standalone";

async function compileSchemas() {
  const files = globSync("./src/**/*schema.ts");
  console.log(files);

  //   for (const file of files) {
  //     const fullPath = path.resolve(file);
  //     const module = await import(pathToFileURL(fullPath).href);
  //     const schema = module.default;

  //     const ajv = new Ajv({ code: { source: true }, strict: true });
  //     const validate = ajv.compile(schema);
  //     const code = standalone(ajv, validate);

  //     const outPath = path.resolve(
  //       "schemas/compiled",
  //       file.replace("./src/", "").replace("/schema.ts", ".js")
  //     );
  //     await fs.mkdir(path.dirname(outPath), { recursive: true });
  //     await fs.writeFile(outPath, code, "utf-8");
  //   }
}

compileSchemas().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { describe, expect, test } from "vitest";
import type { RuntimePluginBundleOptions, PluginSnapshot } from "./asJS";
import { createPluginManifest, createRuntimePluginFiles } from "./asJS";
import type { RuntimeDictionaryData } from "./extract";

describe("createPluginManifest", () => {
  const options: RuntimePluginBundleOptions = {
    outputDirectory: "translate",
    dictionaryName: "dictionary",
    pluginSnapshotName: "pluginSnapshot",
    description: "test description",
  };

  test("creates manifest entries", () => {
    const result = createPluginManifest(options);

    expect(result).toHaveLength(3);

    expect(result[0]?.name).toContain("HonyakuEx");
    expect(result[1]?.name).toBe("translate/dictionary");
    expect(result[2]?.name).toBe("translate/pluginSnapshot");

    result.forEach((item) => {
      expect(item.status).toBe(true);
      expect(item.description).toBe(options.description);
      expect(item.parameters).toEqual({});
    });
  });
});

describe("createRuntimePluginFiles", () => {
  const options: RuntimePluginBundleOptions = {
    outputDirectory: "translate",
    dictionaryName: "dictionary",
    pluginSnapshotName: "pluginSnapshot",
    description: "test description",
  };

  const dictionaryData: RuntimeDictionaryData<string> = {
    targetNoteKeys: [],
    textDictionary: [],
    actorTexts: [],
  };

  const snapshots: PluginSnapshot[] = [
    {
      paths: {
        pluginName: "PluginA",
        commands: [],
        paramsPath: [],
      },
      parameters: {
        name: "PluginA",
        status: true,
        description: "",
        parameters: {},
      },
    },
  ];

  test("creates three files", () => {
    const result = createRuntimePluginFiles(options, dictionaryData, snapshots);

    expect(result).toHaveLength(3);
  });

  test("contains plugins.js", () => {
    const result = createRuntimePluginFiles(options, dictionaryData, snapshots);

    expect(result.some((f) => f.filename === "plugins.js")).toBeTruthy();
  });

  test("contains dictionary js file", () => {
    const result = createRuntimePluginFiles(options, dictionaryData, snapshots);

    expect(
      result.some(
        (f) =>
          f.filename ===
          `${options.outputDirectory}/${options.dictionaryName}.js`,
      ),
    ).toBeTruthy();
  });

  test("contains snapshot js file", () => {
    const result = createRuntimePluginFiles(options, dictionaryData, snapshots);

    expect(
      result.some(
        (f) =>
          f.filename ===
          `${options.outputDirectory}/${options.pluginSnapshotName}.js`,
      ),
    ).toBeTruthy();
  });

  test("all generated files are javascript files", () => {
    const result = createRuntimePluginFiles(options, dictionaryData, snapshots);

    result.forEach((file) => {
      expect(file.filename.endsWith(".js"), file.filename).toBeTruthy();
    });
  });
});

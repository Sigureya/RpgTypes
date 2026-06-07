import { describe, expect, test } from "vitest";
import type {
  AssetFilesBundle,
  FileReadBundle,
  RawGameData,
  TestRawDataSource,
} from "@RpgTypes/fileio";
import { makeRawTestDataBundle } from "@RpgTypes/fileio";
import type {
  Command_PluginCommandMZ,
  RpgDataBundleHasText,
} from "@RpgTypes/rmmz";
import type {
  PluginParamExtractionOutput,
  PluginParamExtractionOutputWithError,
} from "@sigureya/rmmz-plugin-schema";
import type { BuildEx3Output } from "./buildEx3";
import type { RuntimeDictionaryData } from "./core/extract/dictionary";
import {
  buildDataBuildJsPayload,
  buildDictionaryJsPayload,
  buildHackedPluginsJsPayload,
  buildRuntimePipelineOutput,
  createRuntimeDataBuild,
  FILENAME_RUNTIME_DATA_BUILD_JS,
  FILENAME_RUNTIME_DICTIONARY_JS,
  FILENAME_RUNTIME_HACKED_PLUGINS_JS,
  runtimePipelineToFileEntries,
} from "./pipeline";

const TEST_SOURCE: TestRawDataSource = {
  text: "old text",
  image: "ImageName",
  audio: "AudioName",
  note: "<Target:old text>",
  message: "ok",
  nonReplaceableText: "NON",
  switches: "Switch",
  variables: "Variable",
};

const createAssetBundle = (): AssetFilesBundle => ({
  audioFiles: {
    bgm: new Set(),
    bgs: new Set(),
    me: new Set(),
    se: new Set(),
  },
  imageFiles: {
    characters: new Set(),
    faces: new Set(),
    svEnemy: new Set(),
    enemies: new Set(),
    svActors: new Set(),
    picutures: new Set(),
    tilesets: new Set(),
  },
  otherFiles: {
    movies: new Set(),
  },
});

const createBundle = (): FileReadBundle => {
  const data: RawGameData = makeRawTestDataBundle(TEST_SOURCE);
  const assets = createAssetBundle();
  return {
    data,
    audioFiles: assets.audioFiles,
    imageFiles: assets.imageFiles,
    otherFiles: assets.otherFiles,
  };
};

const createPrepared = (): BuildEx3Output<string> => {
  const command: Command_PluginCommandMZ = {
    code: 357,
    indent: 0,
    parameters: ["PluginA", "Show", "", { message: "old text" }],
  };

  const pluginParams: PluginParamExtractionOutput[] = [
    {
      pluginName: "PluginA",
      params: [],
    },
  ];

  const pluginParamsWithErrors: PluginParamExtractionOutputWithError<string>[] =
    [
      {
        pluginName: "PluginA",
        params: [],
        errors: [],
      },
    ];

  return {
    fileBundle: createBundle(),
    pluginSchemas: [
      {
        pluginName: "PluginA",
        schema: {
          structs: [],
          params: [{ name: "title", attr: { kind: "string", default: "" } }],
          commands: [
            {
              command: "Show",
              args: [
                {
                  name: "message",
                  attr: { kind: "string", default: "" },
                },
              ],
            },
          ],
        },
      },
    ],
    pluginParams,
    pluginParamsWithErrors,
    pluginPath: {
      params: [
        {
          pluginName: "PluginA",
          paramsPath: [["title"]],
          commands: [
            {
              commandName: "Show",
              argsPath: [["message"]],
            },
          ],
        },
      ],
      commandPaths: [
        {
          key: "PluginA:Show",
          pluginName: "PluginA",
          commandName: "Show",
          argsPath: [["message"]],
          commands: [command],
        },
      ],
      groupedCommands: new Map([["PluginA:Show", [command]]]),
    },
    pluginParamPathMap: new Map([
      [
        "PluginA",
        {
          pluginName: "PluginA",
          paramsPath: [["title"]],
          commands: [{ commandName: "Show", argsPath: [["message"]] }],
        },
      ],
    ]),
    pluginCommandPathMap: new Map([
      [
        "PluginA:Show",
        {
          key: "PluginA:Show",
          pluginName: "PluginA",
          commandName: "Show",
          argsPath: [["message"]],
          commands: [command],
        },
      ],
    ]),
  };
};

const createDictionary = (): RuntimeDictionaryData<string> => ({
  targetNoteKeys: ["Target"],
  textDictionary: [
    { key: "hash_old_text", value: "old text" },
    { key: "hash_Actor", value: "Actor" },
  ],
  actorTexts: [{ key: "Actor", value: "hash_Actor" }],
});

const toRuntimeData = (data: RawGameData): RpgDataBundleHasText => {
  if (!data.system.system) {
    throw new Error("system is null");
  }
  return {
    actors: data.actors.data,
    enemies: data.enemies.data,
    weapons: data.weapons.data,
    armors: data.armors.data,
    classes: data.classes.data,
    items: data.items.data,
    troops: data.troops.data,
    commonEvents: data.commonEvents.data,
    skills: data.skills.data,
    states: data.states.data,
    system: data.system.system,
  };
};

describe("features pipeline", () => {
  describe("payload builders", () => {
    test("buildDictionaryJsPayload", () => {
      const dictionary = createDictionary();
      const result = buildDictionaryJsPayload(dictionary);
      expect(result).toEqual({
        format: "dictionary.js",
        dictionary,
      });
    });

    test("buildHackedPluginsJsPayload", () => {
      const prepared = createPrepared();
      const dictionary = createDictionary();
      const result = buildHackedPluginsJsPayload(prepared, dictionary);

      expect(result.format).toBe("hackedPlugins.js");
      expect(result.pluginPathDictionary).toEqual(prepared.pluginPath.params);
      expect(result.pluginSchemas).toEqual(prepared.pluginSchemas);
      expect(result.pluginParams).toEqual(prepared.pluginParams);
      expect(result.pluginParamsWithErrors).toEqual(
        prepared.pluginParamsWithErrors,
      );
      expect(result.dictionary).toEqual(dictionary);
    });

    test("buildDataBuildJsPayload", () => {
      const result = buildDataBuildJsPayload();
      expect(result).toEqual({
        format: "dataBuild.js",
        dictionaryFile: FILENAME_RUNTIME_DICTIONARY_JS,
        hackedPluginsFile: FILENAME_RUNTIME_HACKED_PLUGINS_JS,
        entry: "replaceRuntimeData",
      });
    });
  });

  describe("pipeline output", () => {
    test("buildRuntimePipelineOutput", () => {
      const prepared = createPrepared();
      const dictionary = createDictionary();
      const result = buildRuntimePipelineOutput(prepared, dictionary);

      expect(result.dictionaryJs.format).toBe("dictionary.js");
      expect(result.hackedPluginsJs.format).toBe("hackedPlugins.js");
      expect(result.dataBuildJs.format).toBe("dataBuild.js");
      expect(result.hackedPluginsJs.pluginPathDictionary).toEqual(
        prepared.pluginPath.params,
      );
      expect(result.dictionaryJs.dictionary.textDictionary).toEqual(
        dictionary.textDictionary,
      );
    });

    test("runtimePipelineToFileEntries", () => {
      const prepared = createPrepared();
      const dictionary = createDictionary();
      const output = buildRuntimePipelineOutput(prepared, dictionary);
      const result = runtimePipelineToFileEntries(output);

      expect(result).toEqual([
        {
          filename: FILENAME_RUNTIME_DICTIONARY_JS,
          data: output.dictionaryJs,
        },
        {
          filename: FILENAME_RUNTIME_HACKED_PLUGINS_JS,
          data: output.hackedPluginsJs,
        },
      ]);
    });
  });

  describe("runtime reconstruction", () => {
    test("createRuntimeDataBuild: hash text を runtime 辞書で復元する", () => {
      const dictionary = createDictionary();
      const runtimeBuild = createRuntimeDataBuild(dictionary);
      const baseData = makeRawTestDataBundle(TEST_SOURCE);
      const runtimeData = toRuntimeData(baseData);
      runtimeData.actors[0] = {
        ...runtimeData.actors[0],
        name: "hash_Actor",
      };

      const result = runtimeBuild(runtimeData);

      expect(result.actors[0]?.name).toBe("Actor");
    });
  });
});

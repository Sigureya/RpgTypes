import type { AudioFileParams } from "@RpgTypes/libs";
import type { Data_Map, Encounter, MapEvent } from "@RpgTypes/rmmz";
import type { JSONSchemaType, Schema } from "ajv";
import { SCHEMA_MAP_EVENT_PAGE } from "./event/page";

export const SCHEMA_DATA_MAP = {
  type: "object",
  additionalProperties: false,

  $defs: {
    AudioFileParams: {
      type: "object",
      additionalProperties: false,
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" },
      },
    } as const satisfies JSONSchemaType<AudioFileParams>,
    EncounterList: {
      type: "array",
      items: {
        additionalProperties: false,
        type: "object",
        required: ["regionSet", "troopId", "weight"],
        properties: {
          regionSet: { type: "array", items: { type: "integer" } },
          troopId: { type: "integer" },
          weight: { type: "integer" },
        },
      },
    } as const satisfies JSONSchemaType<Encounter[]>,
    MapEvents: {
      type: "array",
      items: {
        oneOf: [
          { type: "null" },
          {
            type: "object",
            required: [
              "id",
              "name",
              "x",
              "y",
              "pages",
              "note",
            ] satisfies (keyof MapEvent)[],
            properties: {
              id: { type: "integer" },
              name: { type: "string" },
              x: { type: "integer" },
              y: { type: "integer" },
              note: { type: "string" },
              pages: {
                type: "array",
                items: SCHEMA_MAP_EVENT_PAGE,
              },
            },
          },
        ],
      },
    } as const satisfies Schema,
  },

  required: [
    "battleback1Name",
    "battleback2Name",
    "note",
    "width",
    "height",
    "parallaxSy",
    "parallaxSx",
    "parallaxLoopY",
    "parallaxLoopX",
    "disableDashing",
    "parallaxName",
    "parallaxShow",
    "displayName",
    "data",
    "autoplayBgm",
    "bgm",
    "autoplayBgs",
    "bgs",
    "tilesetId",
    "encounterList",
    "events",
    "encounterStep",
    "scrollType",
    "specifyBattleback",
  ] satisfies (keyof Data_Map)[],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: { type: "boolean" },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSy: { type: "integer" },
    parallaxSx: { type: "integer" },

    tilesetId: { type: "integer" },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },

    displayName: { type: "string" },
    disableDashing: { type: "boolean" },

    autoplayBgm: { type: "boolean" },
    bgm: { $ref: "#/$defs/AudioFileParams" },
    autoplayBgs: { type: "boolean" },
    bgs: { $ref: "#/$defs/AudioFileParams" },

    encounterList: {
      $ref: "#/$defs/EncounterList",
    },
    events: {
      $ref: "#/$defs/MapEvents",
    },
    encounterStep: { type: "integer" },
    scrollType: { type: "integer" },
    specifyBattleback: { type: "boolean" },
  } satisfies Record<keyof Data_Map, Schema>,
} as const satisfies Schema;

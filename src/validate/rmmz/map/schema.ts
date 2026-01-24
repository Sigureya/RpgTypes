import type { AudioFileParams } from "@RpgTypes/libs";
import type { Data_Map, MapEvent, MapEventPage } from "@RpgTypes/rmmz";
import type { Encounter } from "@RpgTypes/rmmz/rpg/data/event/map/types/encounter";
import type { JSONSchemaType, Schema } from "ajv";
import { SCHEMA_MAP_EVENT_PAGE_CONDITION } from "./event/condition";
import { SCHEMA_MAP_EVENT_IMAGE } from "./event/image";
import { SCHEMA_MOVEROUTE_DATA } from "./event/moveRoute";

export const SCHEMA_DATA_MAP = {
  type: "object",
  additionalProperties: false,

  $defs: {
    AudioFileParams: {
      type: "object",
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
            items: {
              type: "object",
              required: [
                "conditions",
                "image",
                "list",
                "moveRoute",
                "directionFix",
                "priorityType",
                "moveFrequency",
              ],
              properties: {
                priorityType: { type: "integer" },
                directionFix: { type: "boolean" },
                moveFrequency: { type: "integer" },
                conditions: SCHEMA_MAP_EVENT_PAGE_CONDITION,
                list: { type: "array" },
                image: SCHEMA_MAP_EVENT_IMAGE,
                moveRoute: SCHEMA_MOVEROUTE_DATA,
              } as const satisfies Record<keyof MapEventPage, Schema>,
            },
          },
        },
      },
    } as const,
  },

  required: [
    "battleback1Name",
    "battleback2Name",
    "note",
    "width",
    "height",
    "x",
    "y",
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
    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
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
  } satisfies Record<keyof Data_Map, Schema>,
} as const satisfies Schema;

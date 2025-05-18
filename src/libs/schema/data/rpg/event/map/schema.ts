import type { JSONSchemaType } from "ajv";
import type { Data_Map } from "./map";
import type { Encounter } from "./members";
import type { AudioFileParams } from "@RpgTypes/utils";
import type {
  MapEvent,
  MapEvent_Image,
  MapEvent_PageCondition,
  MapEventPage,
} from "./event";
import { SCHEMA_MOVEROUTE_DATA } from "./event/eventCommand/moveRoute/schema";
import type { MoveRouteDataUnkwnown } from "./event/eventCommand/moveRoute";
import { SCHEMA_MAP_EVENT_PAGE_CONDITION } from "./event/schema";

export const SCHEMA_MAP_EVENT_IMAGE = {
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "direction",
    "pattern",
    "tileId",
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" },
  },
} as const satisfies JSONSchemaType<MapEvent_Image>;

export const SCHEMA_MAP_EVENT_PAGE = {
  type: "object",
  required: [
    "image",
    "moveRoute",
    "conditions",
    "directionFix",
    "moveFrequency",
  ] satisfies (keyof MapEventPage)[],
  properties: {
    moveFrequency: { type: "integer" },
    directionFix: { type: "boolean" },
    conditions:
      SCHEMA_MAP_EVENT_PAGE_CONDITION satisfies JSONSchemaType<MapEvent_PageCondition>,

    image: SCHEMA_MAP_EVENT_IMAGE satisfies JSONSchemaType<MapEvent_Image>,
    moveRoute:
      SCHEMA_MOVEROUTE_DATA satisfies JSONSchemaType<MoveRouteDataUnkwnown>,
    // list: {
    //   type: "array",
    //   items: {
    //     type: "object",
    //     required: ["code", "indent", "parameters"],
    //     properties: {
    //       code: { type: "integer" },
    //       indent: { type: "integer" },
    //       parameters: {
    //         type: "array",
    //         items: {},
    //       },
    //     },
    //   },
    // },
  },
} as const satisfies JSONSchemaType<Omit<MapEventPage, "list">>;

export const SCHEMA_DATA_MAP = {
  type: "object",

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

    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },

    displayName: { type: "string" },
    disableDashing: { type: "boolean" },

    autoplayBgm: { type: "boolean" },
    bgm: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" },
      },
    } as const satisfies JSONSchemaType<AudioFileParams>,

    autoplayBgs: { type: "boolean" },
    bgs: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" },
      },
    } as const satisfies JSONSchemaType<AudioFileParams>,

    encounterList: {
      type: "array",
      items: {
        type: "object",
        required: ["regionSet", "troopId", "weight"],
        properties: {
          regionSet: { type: "array", items: { type: "integer" } },
          troopId: { type: "integer" },
          weight: { type: "integer" },
        },
      } satisfies JSONSchemaType<Encounter>,
    } satisfies JSONSchemaType<Encounter[]>,
    events: {
      type: "array",
      items: {
        type: "object",
        required: [
          "id",
          "name",
          "x",
          "y",
          "pages",
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
      } as const,
    },
  }, // satisfies Record<keyof Data_Map, unknown>,
} as const satisfies JSONSchemaType<Omit<Data_Map, "events">>;
// evetntsはコモンイベントが入ってて複雑。簡略化して対応する

import type { Data_Animation } from "@RpgTypes/rmmz";
import type { Schema } from "ajv";

export const SCHEMA_DATA_ANIMATION = {
  type: "object",
  required: [
    "name",
    "id",
    "effectName",
    "displayType",
    "offsetX",
    "offsetY",
    "scale",
    "speed",
    "rotation",
    "soundTimings",
    "flashTimings",
  ] satisfies (keyof Data_Animation)[],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    effectName: { type: "string" },
    displayType: { type: "integer" },
    offsetX: { type: "integer" },
    offsetY: { type: "integer" },
    scale: { type: "integer", minimum: 1 },
    speed: { type: "integer", minimum: 1 },
    rotation: {
      type: "object",
      required: ["x", "y", "z"],
      properties: {
        x: { type: "number" },
        y: { type: "number" },
        z: { type: "number" },
      },
    },
    soundTimings: {
      type: "array",
      items: {
        type: "object",
        required: ["se", "frame"],
        properties: {
          frame: { type: "integer" },
          se: {
            type: "object",
            required: ["name", "volume", "pitch", "pan"],
            properties: {
              name: { type: "string" },
              volume: { type: "integer" },
              pitch: { type: "integer" },
              pan: { type: "integer" },
            },
          },
        },
      },
    },
    flashTimings: {
      type: "array",
      items: {
        type: "object",
        required: ["color", "duration", "frame"],
        properties: {
          frame: { type: "integer" },
          duration: { type: "integer" },
          color: {
            type: "array",
            items: { type: "integer", minimum: 0, maximum: 255 },
            minItems: 4,
            maxItems: 4,
          },
        },
      },
    },
  } satisfies Record<keyof Data_Animation, Schema>,
} as const;

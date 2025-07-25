export type JSONSchemaAudioFileParams = {
  type: "object";
  additionalProperties: false;
  required: ["name", "volume", "pitch", "pan"];
  properties: {
    name: { type: "string" };
    volume: { type: "integer" };
    pitch: { type: "integer" };
    pan: { type: "integer" };
  };
};

import Ajv from "ajv";
import type { Data_MapInfo } from "./map";
import SCHEMA_DATA_MAP from "./map/schema";

const ajv = new Ajv({
  strict: true,
});

const mapData = ajv.compile(SCHEMA_DATA_MAP);

export const isDataMap = (data: unknown): data is Data_MapInfo => {
  return mapData(data);
};

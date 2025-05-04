import Ajv from "ajv";
import type { Data_MapInfo } from "./map";
import { SCHEMA_DATA_MAP_INFO } from "./map";

const ajv = new Ajv();

const mapInfo = ajv.compile(SCHEMA_DATA_MAP_INFO);

export const isDataMapInfo = (data: unknown): data is Data_MapInfo => {
  return mapInfo(data);
};

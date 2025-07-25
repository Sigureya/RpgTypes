import Ajv from "ajv";
import type { Data_MapInfo } from "./map";
import SCHEMA_DATA_MAP_INFO from "./map/mapInfo/schema";
import SCHEMA_DATA_MAP from "./map/schema";

const ajv = new Ajv({
  strict: true,
});

const mapInfo = ajv.compile(SCHEMA_DATA_MAP_INFO);

const mapData = ajv.compile(SCHEMA_DATA_MAP);

export const isDataMapInfo = (data: unknown): data is Data_MapInfo => {
  return mapInfo(data);
};

export const isDataMap = (data: unknown): data is Data_MapInfo => {
  return mapData(data);
};

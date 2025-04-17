import type { GlobalGameData } from "./types";

export interface DataDomain {
  domainName: string;
}

export type MainDataDomains = {
  [K in keyof GlobalGameData]: DataDomain;
};

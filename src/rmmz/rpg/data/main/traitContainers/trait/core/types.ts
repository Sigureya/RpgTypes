import type { SourceIdentifier } from "@RpgTypes/libs";
import type { TraitCode } from "./constants";

export interface TraitFormat {
  pattern: string;
  kindId: TraitCode;
  label: string;
  dataSource?: SourceIdentifier;
}

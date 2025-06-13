import type { SourceIdentifier } from "src/namedItemSource";
import type { TraitCode } from "./constants";

export interface TraitFormat {
  pattern: string;
  kindId: TraitCode;
  label: string;
  dataSource?: SourceIdentifier;
}

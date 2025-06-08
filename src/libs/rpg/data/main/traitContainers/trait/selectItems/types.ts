import type { SourceIdentifier } from "src/namedItemSource";

export interface TraitFormat {
  pattern: string;
  kindId: number;
  label: string;
  dataSource?: SourceIdentifier;
}

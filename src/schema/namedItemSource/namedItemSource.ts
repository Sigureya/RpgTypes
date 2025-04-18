import type { SourceIdentifier } from "./sourceIdentifier";

export interface NamedItemSource {
  source: SourceIdentifier;
  items: { name: string; id: number }[];
  label: string;
}

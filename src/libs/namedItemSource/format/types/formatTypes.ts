import type { SourceIdentifier } from "./sourceIdentifier";

export interface FormatWithSource {
  format: string;
  dataSource?: SourceIdentifier;
}

export interface FormatResult {
  label: string;
  text: string;
}

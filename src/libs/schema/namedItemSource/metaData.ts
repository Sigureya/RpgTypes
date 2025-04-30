import type { SourceIdentifier } from "./sourceIdentifier";

export interface MetaDataA {
  src: SourceIdentifier;
  fileName: string;
  //  isFixedLength:false
}

export interface MetaDataB {
  src: SourceIdentifier;
}

export interface SourceIdentifier {
    author: string;
    module: string;
    kind: string;
}
export interface Data_NamedItem2 {
    id: number;
    name: string;
}
export interface NamedItemSource {
    items: Data_NamedItem2[];
    source: SourceIdentifier;
    label: string;
}

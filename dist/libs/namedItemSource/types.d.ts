export interface SourceIdentifier {
    author: string;
    module: string;
    kind: string;
}
export interface Data_NamedItem {
    id: number;
    name: string;
}
export interface NamedItemSource {
    items: Data_NamedItem[];
    source: SourceIdentifier;
    label: string;
}

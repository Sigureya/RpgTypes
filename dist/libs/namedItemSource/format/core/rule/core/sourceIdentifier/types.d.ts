export type SourceIdentifier = {
    author: string;
    module: string;
    kind: string;
};
export interface SourceIdentifierBase<T extends {
    author: string;
    module: string;
}> extends SourceIdentifier {
    author: T["author"];
    module: T["module"];
}

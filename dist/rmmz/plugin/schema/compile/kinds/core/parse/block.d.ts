export interface Block {
    structs: PlguinStructBlock[];
    bodies: PlguinBodyBlock[];
}
export interface PlguinStructBlock {
    locale?: string;
    struct: string;
    lines: string[];
}
export interface PlguinBodyBlock {
    locale?: string;
    lines: string[];
}
export declare const splitBlock: (block: string) => Block;

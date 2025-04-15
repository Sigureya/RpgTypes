export type LabelEntry = {
    domainName: string;
} & Record<string, string>;
export type LabelDomains = Record<string, LabelEntry>;

import { DomainName } from '../../../templates';
export interface System_DataNames {
    weaponTypes: string[];
    skillTypes: string[];
    elements: string[];
    variables: string[];
    equipTypes: string[];
    switches: string[];
    armorTypes: string[];
}
export interface SystemLabel_DataNames extends DomainName {
    domainName: string;
    format: string;
    options: Record<keyof System_DataNames, string>;
}

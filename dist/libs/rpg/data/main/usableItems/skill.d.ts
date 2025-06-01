import { SourceIdentifier } from '../../../../schema/namedItemSource';
import { Data_Skill } from './types';
export declare const skillSourceId: () => SourceIdentifier;
export declare const makeSkillData: (skill?: Partial<Data_Skill>) => Data_Skill;

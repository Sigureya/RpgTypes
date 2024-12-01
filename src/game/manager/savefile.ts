export interface ISaveFileManager {
  isAnySavefileExists(): boolean;
  earliestSavefileId(): number;
  emptySavefileId(): number;
}

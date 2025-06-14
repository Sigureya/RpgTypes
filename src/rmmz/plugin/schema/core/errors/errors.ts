export interface StructNode_Error<Path extends string = string> {
  type: "error";
  text: "StructNode_Error";
  desc: Path;
  default: never;
}

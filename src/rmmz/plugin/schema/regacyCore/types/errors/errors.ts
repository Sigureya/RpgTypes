export interface StructNode_Error<Path extends string = string> {
  kind: "error";
  text: "StructNode_Error";
  desc: Path;
  default: never;
}

export interface CommandTrait {
  write: {
    valueType: "string" | "number";
  }[];
  read: {
    valueType: "string" | "number";
  }[];
}

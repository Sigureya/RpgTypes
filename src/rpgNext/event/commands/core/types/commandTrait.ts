export interface CommandTrait {
  write: {
    valueType: "string" | "number";
  }[];
  read: {
    valueType: "string" | "number";
  }[];
  call: {
    valueType: "string" | "number" | "object";
    function: string;
  }[];
}

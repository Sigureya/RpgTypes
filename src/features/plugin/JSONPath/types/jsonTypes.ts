type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [key: string]: JsonValueType };
type JsonArray = JsonValueType[];
type JsonValueType = JsonPrimitive | JsonArray | JsonObject;
export type JSONValue = JsonValueType;

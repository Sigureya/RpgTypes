declare const SCHEMA_SYSTEM_GAME_INITIAL: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["startMapId", "startX", "startY", "partyMembersArray"];
    readonly properties: {
        readonly startMapId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly startX: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly startY: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly partyMembersArray: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
                readonly minimum: 0;
            };
        };
    };
};
export default SCHEMA_SYSTEM_GAME_INITIAL;

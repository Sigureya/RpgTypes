import { EventCode, EventCommand, EventCommandByCode, EventCommandTable } from '../../rmmz/rpg';
export declare const createEventCommand: <Code extends EventCode>(code: Code, params: EventCommandByCode[Code]["parameters"], indent?: number) => {
    code: Code;
    parameters: EventCommandByCode[Code]["parameters"];
    indent: number;
};
export declare const showMessage: (command: EventCommandTable["SHOW_MESSAGE"]) => 101;
export declare const eventCommandEx: (command: EventCommand) => 0 | 322 | 320 | 324 | 325 | 132 | 133 | 139 | 241 | 245 | 249 | 250 | 140 | 251 | 411 | 117 | 121 | 101 | 401 | 102 | 402 | 103 | 104 | 105 | 405 | 108 | 408 | 109 | 111 | 112 | 113 | 115 | 118 | 119 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 134 | 135 | 136 | 137 | 138 | 201 | 202 | 203 | 204 | 205 | 206 | 211 | 212 | 213 | 214 | 216 | 217 | 221 | 222 | 223 | 224 | 225 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 242 | 243 | 244 | 246 | 261 | 282 | 283 | 284 | 285 | 301 | 302 | 605 | 303 | 311 | 312 | 313 | 314 | 315 | 321 | 323 | 331 | 332 | 333 | 334 | 335 | 336 | 337 | 339 | 340 | 351 | 342 | 352 | 353 | 354 | 355 | 655 | 356 | 357;

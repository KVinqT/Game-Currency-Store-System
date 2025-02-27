"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_readline_1 = require("node:readline");
var rl = (0, node_readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
exports.default = rl;

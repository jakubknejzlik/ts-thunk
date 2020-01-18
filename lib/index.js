"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isThunkFunction(thunk) {
    return typeof thunk === "function";
}
exports.isThunkFunction = isThunkFunction;
function resolveThunk(thunk, arg) {
    return isThunkFunction(thunk) ? thunk(arg) : thunk;
}
exports.resolveThunk = resolveThunk;
function resolveOptionalThunk(thunk, arg) {
    if (typeof thunk === "undefined") {
        return undefined;
    }
    return resolveThunk(thunk, arg);
}
exports.resolveOptionalThunk = resolveOptionalThunk;
//# sourceMappingURL=index.js.map
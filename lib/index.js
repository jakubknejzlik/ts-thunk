"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isThunkFunction(thunk) {
    return typeof thunk === 'function';
}
exports.isThunkFunction = isThunkFunction;
function resolveThunk(thunk, arg) {
    return isThunkFunction(thunk) ? thunk(arg) : thunk;
}
exports.resolveThunk = resolveThunk;
//# sourceMappingURL=index.js.map
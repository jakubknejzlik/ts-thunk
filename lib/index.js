"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isThunkFunction(thunk) {
    return typeof thunk === 'function';
}
exports.isThunkFunction = isThunkFunction;
function resolveThunk(thunk) {
    return isThunkFunction(thunk) ? thunk() : thunk;
}
exports.resolveThunk = resolveThunk;
//# sourceMappingURL=index.js.map